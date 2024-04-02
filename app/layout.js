import { Cairo } from "next/font/google";
import "./globals.css";

const inter = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "Fastest Courier & Shipping Services | Bosta Egypt",
  description: "Fastest Courier & Shipping Services | Bosta Egypt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
