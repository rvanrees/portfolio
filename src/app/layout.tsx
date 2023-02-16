import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-white bg-black">
      <head />
      <body className="p-8 md:p-32 lg:p-32">{children}</body>
    </html>
  );
}
