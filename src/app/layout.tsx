import type { Metadata } from "next";
import "../styles/index.scss";
import Navbar from "../components/navbar";
import { inter } from "../styles/fonts";

export const metadata: Metadata = {
  title: "The Aggregate",
  description: "The news you want, when you want it",
  icons: {
    icon: "/favicon.png",
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
        <div className="fixed top-0 bottom-0 w-full overflow-hidden z-[-1]">
          <div className="absolute h-[850px] w-[850px] bottom-[-800px] right-[-200px] flare opacity-70" />
          <div className="fixed h-[1700px] w-[1700px] top-[-1000px] right-[-900px] flare opacity-80" />
          <div className="absolute h-[1700px] w-[1700px] top-[-100px] left-[-1000px] flare opacity-65" />
        </div>
      </body>
    </html>
  );
}
