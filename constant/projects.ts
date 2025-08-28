import { projectsType } from "@/types/types";



export const projectsData: projectsType[] = [
    {
        id: 1,
        image: "/sorbon.png",
        title: "Sorbon website",
        lang_tools: "Next.js, TypeScript",
        description:[ "·Built a responsive corporate website showcasing services and contact options.",
        "·Used TypeScript for strong typing and improved maintainability.",
        "·Optimized SEO and performance with server - side rendering."],
        description_sub: "A website that showcases the courses offered by this academy, as well as registration and inquiry forms, and other services requested by the customer.",
        git_hub: "",
        live_host: "https://sorbon-website.vercel.app/"
    },
    {
        id: 2,
        image: "/telecom.png",
        title: "Dashboard for Ebrahem Telecom ",
        lang_tools: "React.js, Tailwind CSS, Context API, Axios, Cookies",
        description: ["•Developed a full admin dashboard for telecom services, including authentication (login/logout), sidebar navigation, balance view, inquiries table, filtering by date, and financial statements.",
        "•Worked closely with UI/UX structure and implemented advanced features like token-based authentication dynamic routing, and REST API integration."],
        description_sub: "A control panel for managing telecom company operations, user management, financial affairs, and credit transfers to points of sale, agents, and other departments that serve the customer's goals and requirements.",
        git_hub: "",
        live_host: "https://sorbon-website.vercel.app/"
    },

]