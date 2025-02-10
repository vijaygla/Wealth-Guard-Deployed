import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Link from "next/link";import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-between items-center">
                <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
                  <h2 className="text-2xl font-bold">WealthGuard</h2>
                  <p className="mt-2">Your trusted 💗 financial management platform.</p>
                </div>
                <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold">Contact Us</h3>
                  <p className="mt-2">Helpline: +1 234 567 890</p>
                  <p>Email: support@wealthguard.com</p>
                </div>
                <div className="w-full md:w-1/3 text-center md:text-right">
                  <h3 className="text-xl font-semibold">Follow Us</h3>
                  <div className="flex justify-center md:justify-end mt-2">
                    <Link href="https://www.facebook.com" legacyBehavior>
                      <a className="mx-2 text-white hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={24} />
                      </a>
                    </Link>
                    <Link href="https://www.twitter.com" legacyBehavior>
                      <a className="mx-2 text-white hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={24} />
                      </a>
                    </Link>
                    <Link href="https://www.linkedin.com" legacyBehavior>
                      <a className="mx-2 text-white hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                      </a>
                    </Link>
                    <Link href="https://www.instagram.com" legacyBehavior>
                      <a className="mx-2 text-white hover:text-pink-500" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <p>&copy; {new Date().getFullYear()} WealthGuard. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
