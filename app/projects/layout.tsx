import type { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "Fatima Souliman | Projects",
    description: "I'm fatima souliman a front end developer",
    keywords: "fatima, souliman, front end developer, developer, next js, react js",
  };
}

export default function ProjectsLayout({
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
