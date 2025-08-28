import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/footer/Footer";
import { Work_Sans } from "next/font/google";




const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "Fatima souliman",
    description: "I'm fatima souliman a front end developer",
    keywords: "fatima, souliman, front end",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${workSans.className} bg-[#000000] justify-between min-h-screen max-w-full grid grid-rows-[60px 1fr 80px] grid-cols-1  m-auto`}
      >
    
        <NavBar />
        <main className="flex max-w-full flex-col px-16 items-center sm:items-start pt-44 lg:pt-28 md:pt-28">
          {children}
        </main>
        <Footer />
   
      </body>
    </html>
  );
}
