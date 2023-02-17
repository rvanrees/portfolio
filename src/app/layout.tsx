import { AnalyticsWrapper } from "components/analytics";
import { Navbar } from "components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-white bg-[url('/bg.jpg')] bg-center">
      <head />
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
