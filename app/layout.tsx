import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Technologies } from "@/components/technologies";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mingche.com",
  description: "personal website made by Mingche :D",
  icons:{
    icon:"favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar/>
        {children}
        <Technologies/>
        <Footer/>
      </body>
    </html>
  );
}
