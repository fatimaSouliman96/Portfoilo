import Image from 'next/image';
import React from 'react'

export default function SkillsPage() {
    const skills = [
        { score: "Intermediate ", name: "React.js", icon: "/react-logo.png" },
        { score: "Intermediate ", name: "Next.js", icon: "/next.png" },
        { score: "Intermediate ", name: "TypeScript", icon: "/TypeScript.jfif" },
        { score: "Intermediate ", name: "Tailwind CSS", icon: "/tailwind.png" },
        { score: "Intermediate ", name: "Material UI", icon: "/matrial.png" },
        { score: "Intermediate ", name: "Redux Toolkit", icon: "/redux.png" },
    ];
    return (
        <div className='w-full pt-8 pb-8' >
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-white mb-4">My Skills</h1>
                <p className="text-gray-300 max-w-xl mx-auto">
                    Here are the technologies I’ve worked with and continue to grow in. I strive to improve my skills daily.
                </p>
            </div>
            <p className='text-white text-4xl font-extrabold leading-[4rem]' >
                Skills
            </p>
            <div className="grid pt-8 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="group bg-white/5 hover:bg-white/10 transition-all p-4 rounded-2xl flex flex-col items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.1)] space-y-2"
                    >
                        <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className="rounded mb-2"
                        />
                        <span className="text-sm text-gray-400">{skill.score}</span>
                        <span className="text-base text-white font-semibold">{skill.name}</span>
                    </div>

                ))}
            </div>
        </div>
    )
}
