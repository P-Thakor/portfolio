import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parth Thakor | Portfolio",
  description: "Web Developer specializing in MERN stack development",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header /> */}
        <main className="pt-24">{children}</main>
        
        {/* <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 text-center mt-24">
          <div className="container mx-auto">
            <p className="mb-2">Connect with me</p>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://github.com/P-Thakor" className="hover:text-blue-200 transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/parththakor" className="hover:text-blue-200 transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://twitter.com/ParthT1410" className="hover:text-blue-200 transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Parth Thakor. All rights reserved.</p>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
