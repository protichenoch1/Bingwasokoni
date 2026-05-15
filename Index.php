<?php
session_start();

$dbPath = dirname(__DIR__) . '/densacash.sqlite';

$db = new PDO('sqlite:' . $dbPath);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$db->exec('CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    phone TEXT UNIQUE NOT NULL,
    pin_hash TEXT NOT NULL,
    created_at TEXT NOT NULL
)');

$db->exec('CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    first_name TEXT NOT NULL,
    middle_name TEXT,
    last_name TEXT NOT NULL,
    dob TEXT NOT NULL,
    id_number TEXT NOT NULL,
    phone TEXT NOT NULL,
    gender TEXT NOT NULL,
    marital_status TEXT NOT NULL,
    employment_status TEXT NOT NULL,
    loan_amount INTEGER NOT NULL,
    repayment_period INTEGER NOT NULL,
    loan_purpose TEXT NOT NULL,
    total_repayment INTEGER NOT NULL,
    monthly_repayment INTEGER NOT NULL,
    mpesa_code TEXT,
    status TEXT NOT NULL DEFAULT "Pending Review",
    created_at TEXT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
)');

function current_user_id(): ?int
{
    return isset($_SESSION['user_id']) ? (int) $_SESSION['user_id'] : null;
}

function redirect_to(string $page): void
{
    header('Location: ?page=' . urlencode($page));
    exit;
}

function h(?string $value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
}

function money(float|int $amount): string
{
    return 'KES ' . number_format((float) $amount, 0);
}

function valid_phone(string $phone): bool
{
    return (bool) preg_match('/^07\d{8}$/', $phone);
}

function valid_loan_terms(int $amount, int $period): bool
{
    if ($amount < 1000 || $amount > 50000) {
        return false;
    }

    if ($amount <= 25000) {
        return $period >= 1 && $period <= 6;
    }

    return $amount >= 25100
        && $amount <= 50000
        && $period >= 7
        && $period <= 12;
}

function latest_application(PDO $db, int $userId): ?array
{
    $stmt = $db->prepare(
        'SELECT * FROM applications
         WHERE user_id = ?
         ORDER BY id DESC
         LIMIT 1'
    );

    $stmt->execute([$userId]);

    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    return $row ?: null;
}

$page = $_GET['page'] ?? (current_user_id() ? 'home' : 'signin');

$errors = [];
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $action = $_POST['action'] ?? '';

    if ($action === 'signup') {

        $phone = trim($_POST['phone'] ?? '');
        $pin = (string) ($_POST['pin'] ?? '');
        $confirmPin = (string) ($_POST['confirm_pin'] ?? '');

        if (!valid_phone($phone)) {
            $errors[] = 'Phone number must start with 07 and contain 10 digits.';
        }

        if (!preg_match('/^\d{4,6}$/', $pin)) {
            $errors[] = 'PIN must be 4 to 6 digits.';
        }

        if ($pin !== $confirmPin) {
            $errors[] = 'PIN confirmation does not match.';
        }

        if (!$errors) {

            try {

                $stmt = $db->prepare(
                    'INSERT INTO users (phone, pin_hash, created_at)
                     VALUES (?, ?, ?)'
                );

                $stmt->execute([
                    $phone,
                    password_hash($pin, PASSWORD_DEFAULT),
                    date('c')
                ]);

                $_SESSION['user_id'] = (int) $db->lastInsertId();

                redirect_to('home');

            } catch (PDOException $e) {

                $errors[] = 'An account with this phone number already exists.';
            }
        }

        $page = 'signup';
    }

    if ($action === 'signin') {

        $phone = trim($_POST['phone'] ?? '');
        $pin = (string) ($_POST['pin'] ?? '');

        $stmt = $db->prepare(
            'SELECT id, pin_hash
             FROM users
             WHERE phone = ?'
        );

        $stmt->execute([$phone]);

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($pin, $user['pin_hash'])) {

            $_SESSION['user_id'] = (int) $user['id'];

            redirect_to('home');
        }

        $errors[] = 'Invalid phone number or PIN.';

        $page = 'signin';
    }

    if ($action === 'apply') {

        $userId = current_user_id();

        if (!$userId) {
            redirect_to('signin');
        }

        $firstName = trim($_POST['first_name'] ?? '');
        $middleName = trim($_POST['middle_name'] ?? '');
        $lastName = trim($_POST['last_name'] ?? '');
        $dob = trim($_POST['dob'] ?? '');
        $idNumber = trim($_POST['id_number'] ?? '');
        $phone = trim($_POST['app_phone'] ?? '');
        $gender = trim($_POST['gender'] ?? '');
        $maritalStatus = trim($_POST['marital_status'] ?? '');
        $employmentStatus = trim($_POST['employment_status'] ?? '');
        $loanAmount = (int) ($_POST['loan_amount'] ?? 0);
        $repaymentPeriod = (int) ($_POST['repayment_period'] ?? 0);
        $loanPurpose = trim($_POST['loan_purpose'] ?? '');
        $mpesaCode = strtoupper(trim($_POST['mpesa_code'] ?? ''));

        foreach (
            [
                $firstName,
                $lastName,
                $dob,
                $idNumber,
                $phone,
                $gender,
                $maritalStatus,
                $employmentStatus,
                $loanPurpose
            ] as $value
        ) {

            if ($value === '') {
                $errors[] = 'Please complete all required fields.';
                break;
            }
        }

        if (!valid_phone($phone)) {
            $errors[] = 'Application phone number must start with 07 and contain 10 digits.';
        }

        if (!valid_loan_terms($loanAmount, $repaymentPeriod)) {
            $errors[] = 'Loan amount and repayment period do not match DensaCash rules.';
        }

        if ($mpesaCode === '') {
            $errors[] = 'Enter your M-PESA confirmation code after paying the processing fee.';
        }

        if (!$errors) {

            $totalRepayment = (int) round($loanAmount * 1.15);

            $monthlyRepayment = (int) ceil(
                $totalRepayment / $repaymentPeriod
            );

            $stmt = $db->prepare(
                'INSERT INTO applications (
                    user_id,
                    first_name,
                    middle_name,
                    last_name,
                    dob,
                    id_number,
                    phone,
                    gender,
                    marital_status,
                    employment_status,
                    loan_amount,
                    repayment_period,
                    loan_purpose,
                    total_repayment,
                    monthly_repayment,
                    mpesa_code,
                    created_at
                ) VALUES (
                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
                )'
            );

            $stmt->execute([
                $userId,
                $firstName,
                $middleName,
                $lastName,
                $dob,
                $idNumber,
                $phone,
                $gender,
                $maritalStatus,
                $employmentStatus,
                $loanAmount,
                $repaymentPeriod,
                $loanPurpose,
                $totalRepayment,
                $monthlyRepayment,
                $mpesaCode,
                date('c')
            ]);

            redirect_to('status');
        }

        $page = 'home';
    }

    if ($action === 'logout') {

        session_destroy();

        redirect_to('signin');
    }
}

$userId = current_user_id();

$currentUser = null;

$latestApplication = null;

if ($userId) {

    $stmt = $db->prepare('SELECT * FROM users WHERE id = ?');

    $stmt->execute([$userId]);

    $currentUser = $stmt->fetch(PDO::FETCH_ASSOC);

    $latestApplication = latest_application($db, $userId);
}

if (
    !$userId &&
    !in_array($page, ['signin', 'signup'], true)
) {
    redirect_to('signin');
}

$activePage = in_array(
    $page,
    ['home', 'status', 'repay', 'profile'],
    true
)
    ? $page
    : '';
?>
