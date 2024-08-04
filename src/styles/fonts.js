
import { Inter } from "next/font/google";

export const inter_init = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
    weight: ["300", "400", "500", "600", "700"]
  });

export const inter = inter_init.variable;