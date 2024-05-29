import { Inter, Roboto } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Super Boring Money Tracker",
  description: "From a random guy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar className="sticky "></Navbar>
        {children}
        <Toaster></Toaster>
      </body>
    </html>
  );
}
``;
