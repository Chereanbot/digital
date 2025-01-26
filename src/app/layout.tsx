import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Aksumite",
  description: "Digital Aksumite - Ethiopian Digital Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Main container */}
        <div className="min-h-screen flex flex-col">
          {/* Navigation */}
          <Navbar />
          
          {/* Main content */}
          <main className="flex-grow bg-[#4F4F4F]">
            {children}
          </main>
          
          {/* Partners section */}
          <section className="bg-white py-8">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6">Our Partners</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Partner content will go here */}
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </body>
    </html>
  );
}
