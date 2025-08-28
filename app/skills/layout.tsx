import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "Fatima Souliman | Skills",
    description: "I'm fatima souliman a front end developer",
    keywords: "fatima, souliman, front end developer, developer, next js, react js",
  };
}

export default function SkillsLayout({
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
