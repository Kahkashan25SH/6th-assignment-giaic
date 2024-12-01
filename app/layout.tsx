import {Roboto} from "next/font/google"
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./component/Footer";

const myfont = Roboto({
  subsets: ["latin"],
  weight : ["400", "700"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Figma UI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={myfont.className}
        // {`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        {children}
        <Footer />
      </body>
    </html>
  );
}