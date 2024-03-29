import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Logo from "@/components/logo";
import Link from "next/link";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cat Wiki",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-[7%] min-h-[100dvh] flex flex-col`}>
        <header className="py-3 pb-6">
          <Link href={'/'} className="relative block w-fit">
            <Logo color="#291507"/>
          </Link>
        </header>
        {children}
        <footer className="flex flex-col gap-3 lg:flex-row lg:pl-20 pl-5 mt-auto pr-5 py-4 rounded-t-[30px] lg:items-center text-white bg-black justify-between text-xs lg:text-lg">
          <Logo color="white" width="15%" height="50%"/>
          <p>&copy; created by <span className="font-bold">enzoacostab</span> - devChallenge.io 2021</p>
        </footer>
      </body>
    </html>
  );
}
