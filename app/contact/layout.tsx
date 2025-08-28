import type { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "Fatima Souliman | Contact Me",
    description: "I'm fatima souliman a front end developer",
    keywords: "fatima, souliman, front end developer, developer, next js, react js",
  };
}

export default function ContactLayout({
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
