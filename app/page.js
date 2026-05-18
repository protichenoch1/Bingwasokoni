"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const [loanStatus, setLoanStatus] = useState("Pending");

  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    idNumber: "",
    phoneNumber: "",
    gender: "",
    maritalStatus: "",
    employmentStatus: "",
    loanAmount: "1000",
    repaymentPeriod: "1",
    purpose: "",
  });

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  useEffect(() => {
    calculateLoan();
  }, [form.loanAmount, form.repaymentPeriod]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "loanAmount") {
      let amount = parseInt(value || 0);

      if (amount <= 25000) {
        if (parseInt(form.repaymentPeriod) > 6) {
          setForm((prev) => ({
            ...prev,
            repaymentPeriod: "6",
          }));
        }
      } else {
        if (parseInt(form.repaymentPeriod) < 7) {
          setForm((prev) => ({
            ...prev,
            repaymentPeriod: "7",
          }));
        }
      }
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const calculateLoan = () => {
    const amount = parseInt(form.loanAmount || 0);
    const months = parseInt(form.repaymentPeriod || 1);

    const interest = amount * 0.15;
    const total = amount + interest;
    const monthly = total / months;

    setTotalRepayment(total);
    setMonthlyPayment(monthly);
  };

  const submitLoan = () => {
    alert("Loan Application Submitted Successfully");
    setLoanStatus("Pending Approval");
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-green-700 text-white p-5 rounded-b-3xl shadow-lg">
        <h1 className="text-3xl font-bold">DensaCash</h1>

        <div className="mt-6 bg-green-600 rounded-2xl p-5">
          <p className="text-lg">Get up to</p>

          <h2 className="text-4xl font-extrabold mt-2">
            KES 50,000
          </h2>

          <p className="text-xl mt-2">in minutes.</p>
        </div>
      </div>

      {/* HOME TAB */}
      {activeTab === "home" && (
        <div className="p-4 space-y-5">
          {/* Why Choose */}
          <div className="bg-white rounded-2xl p-5 shadow">
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Why Choose DensaCash
            </h3>

            <div className="space-y-3 text-gray-700">
              <p>✔ Fast loan approvals</p>
              <p>✔ Flexible repayment plans</p>
              <p>✔ Secure application process</p>
              <p>✔ Mobile friendly service</p>
              <p>✔ Simple and transparent terms</p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-2xl p-5 shadow">
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Personal Information
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={form.firstName}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <input
                type="text"
                name="middleName"
                placeholder="Middle Name (Optional)"
                value={form.middleName}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={form.lastName}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <div>
                <label className="block mb-2 text-gray-600">
                  Date of Birth*
                </label>

                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                />
              </div>

              <input
                type="number"
                name="idNumber"
                placeholder="ID Number*"
                value={form.idNumber}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number*"
                value={form.phoneNumber}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              >
                <option value="">Gender*</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <select
                name="maritalStatus"
                value={form.maritalStatus}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              >
                <option value="">Marital Status*</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </select>

              <select
                name="employmentStatus"
                value={form.employmentStatus}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              >
                <option value="">Employment Status*</option>
                <option>Employed</option>
                <option>Self Employed</option>
                <option>Business</option>
                <option>Student</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Loan Details */}
          <div className="bg-white rounded-2xl p-5 shadow">
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Loan Details
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-gray-600">
                  Loan Amount (KES)
                </label>

                <input
                  type="number"
                  min="1000"
                  max="50000"
                  name="loanAmount"
                  value={form.loanAmount}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-600">
                  Repayment Period (Months)
                </label>

                <select
                  name="repaymentPeriod"
                  value={form.repaymentPeriod}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                >
                  {parseInt(form.loanAmount) <= 25000 ? (
                    <>
                      <option value="1">1 Month</option>
                      <option value="2">2 Months</option>
                      <option value="3">3 Months</option>
                      <option value="4">4 Months</option>
                      <option value="5">5 Months</option>
                      <option value="6">6 Months</option>
                    </>
                  ) : (
                    <>
                      <option value="7">7 Months</option>
                      <option value="8">8 Months</option>
                      <option value="9">9 Months</option>
                      <option value="10">10 Months</option>
                      <option value="11">11 Months</option>
                      <option value="12">12 Months</option>
                    </>
                  )}
                </select>
              </div>

              <textarea
                name="purpose"
                placeholder="Loan Purpose*"
                value={form.purpose}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl h-28"
              />
            </div>
          </div>

          {/* Loan Calculator */}
          <div className="bg-white rounded-2xl p-5 shadow">
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Loan Calculator
            </h3>

            <div className="space-y-3 text-gray-700">
              <p>
                Loan Amount:
                <span className="font-bold ml-2">
                  KES {parseInt(form.loanAmount).toLocaleString()}
                </span>
              </p>

              <p>
                Interest (15%):
                <span className="font-bold ml-2">
                  KES {(parseInt(form.loanAmount) * 0.15).toLocaleString()}
                </span>
              </p>

              <p>
                Total Repayment:
                <span className="font-bold ml-2">
                  KES {totalRepayment.toLocaleString()}
                </span>
              </p>

              <p>
                Monthly Payment:
                <span className="font-bold ml-2">
                  KES {monthlyPayment.toFixed(0).toLocaleString()}
                </span>
              </p>
            </div>
          </div>

          {/* Review */}
          <div className="bg-white rounded-2xl p-5 shadow">
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Review Application
            </h3>

            <div className="space-y-2 text-gray-700">
              <p>
                Applicant: {form.firstName} {form.lastName}
              </p>

              <p>
                Phone: {form.phoneNumber}
              </p>

              <p>
                Requested Loan:
                KES {parseInt(form.loanAmount).toLocaleString()}
              </p>

              <p>
                Repayment Period: {form.repaymentPeriod} Months
              </p>
            </div>
          </div>

          {/* Processing Fee */}
          <div className="bg-white rounded-2xl p-5 shadow">
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Processing Fee Payment
            </h3>

            <div className="bg-red-100 border-2 border-red-600 p-4 rounded-xl mb-5">
              <p className="font-bold text-red-700 text-lg">
                NOTE:
              </p>

              <p className="font-bold text-red-700 mt-2">
                Your loan will be approved after your processing fee payment.
                Your loan cannot be approved if you haven't paid the
                processing fee.
              </p>
            </div>

            <div className="space-y-3 text-gray-700">
              <p className="font-bold">Processing Fee: KES 200</p>

              <p>1. Go to M-PESA menu</p>
              <p>2. Select Lipa Na M-PESA</p>
              <p>3. Select Buy Goods and Services</p>
              <p>4. Enter Till Number 8808802</p>
              <p>5. Enter amount</p>
              <p>6. Enter M-PESA PIN to confirm your payment</p>
            </div>

            <button
              onClick={submitLoan}
              className="w-full bg-green-700 text-white py-4 rounded-xl mt-6 font-bold"
            >
              Submit Loan Application
            </button>
          </div>
        </div>
      )}

      {/* Loan Status */}
      {activeTab === "status" && (
        <div className="p-5">
          <div className="bg-white rounded-2xl p-5 shadow text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-5">
              Loan Status
            </h2>

            <div className="bg-yellow-100 text-yellow-800 py-4 rounded-xl font-bold text-xl">
              {loanStatus}
            </div>

            <p className="mt-5 text-gray-600">
              Your loan remains pending until approval.
            </p>
          </div>
        </div>
      )}

      {/* Repay Loan */}
      {activeTab === "repay" && (
        <div className="p-5">
          <div className="bg-white rounded-2xl p-5 shadow">
            <h2 className="text-2xl font-bold text-green-700 mb-5">
              Repay Loan
            </h2>

            <div className="space-y-3 text-gray-700">
              <p>Use the following details to repay your loan:</p>

              <p>1. Go to M-PESA menu</p>
              <p>2. Select Lipa Na M-PESA</p>
              <p>3. Select Buy Goods and Services</p>
              <p>4. Enter Till Number 8808802</p>
              <p>5. Enter repayment amount</p>
              <p>6. Enter your M-PESA PIN</p>
            </div>
          </div>
        </div>
      )}

      {/* Profile */}
      {activeTab === "profile" && (
        <div className="p-5">
          <div className="bg-white rounded-2xl p-5 shadow">
            <h2 className="text-2xl font-bold text-green-700 mb-5">
              Profile
            </h2>

            <div className="space-y-3 text-gray-700">
              <p>
                Name: {form.firstName} {form.lastName}
              </p>

              <p>
                Phone: {form.phoneNumber}
              </p>

              <p>
                ID Number: {form.idNumber}
              </p>

              <p>
                Employment Status: {form.employmentStatus}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg flex justify-around py-3">
        <button
          onClick={() => setActiveTab("home")}
          className={`font-bold ${
            activeTab === "home"
              ? "text-green-700"
              : "text-gray-500"
          }`}
        >
          Home
        </button>

        <button
          onClick={() => setActiveTab("status")}
          className={`font-bold ${
            activeTab === "status"
              ? "text-green-700"
              : "text-gray-500"
          }`}
        >
          Loan Status
        </button>

        <button
          onClick={() => setActiveTab("repay")}
          className={`font-bold ${
            activeTab === "repay"
              ? "text-green-700"
              : "text-gray-500"
          }`}
        >
          Repay Loan
        </button>

        <button
          onClick={() => setActiveTab("profile")}
          className={`font-bold ${
            activeTab === "profile"
              ? "text-green-700"
              : "text-gray-500"
          }`}
        >
          Profile
        </button>
      </div>
    </div>
  );
}
