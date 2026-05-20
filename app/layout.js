import "./globals.css";

export const metadata = {
  title: "Fatcom Solutions",
  description: "Online Earning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
