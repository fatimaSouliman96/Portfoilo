import type { Metadata } from "next";
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
    title: "Fatima Souliman | Projects",
    description: "I'm fatima souliman a front end developer",
    keywords: "fatima, souliman, front end developer, developer, next js, react js",
  };
}

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      {children}

    </>
  );
}
