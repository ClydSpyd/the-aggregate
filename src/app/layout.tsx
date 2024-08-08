import type { Metadata } from "next";
import "../styles/index.scss";
import Navbar from "../components/navbar";
import { inter } from '../styles/fonts';

export const metadata: Metadata = {
  title: "The Aggregate",
  description: "The news you want, when you want it",
  icons: {
    icon:"/favicon.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter} pb-16`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
