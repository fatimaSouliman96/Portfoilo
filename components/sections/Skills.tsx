import Image from 'next/image';
import React from 'react'

export default function Skills() {
    const skills = [
        { name: "React js", icon: "/react-logo.png" },
        { name: "Next js", icon: "/next.png" },
        { name: "TypeScript", icon: "/TypeScript.jfif" },
        { name: "Tailwind", icon: "/tailwind.png" },
        { name: "matrial", icon: "/matrial.png" },
        { name: "Redux", icon: "/redux.png" },
    ];
    return (
        <div className='w-full pt-8 pb-8' >
             <div className='w-1/2 h-[1px] bg-secondary mx-auto mb-8 shadow-[-3px_5px_20px_0px_#ffffff]' ></div>
            <p className='text-white text-4xl font-extrabold leading-[4rem]' >
                Skills
            </p>
            <div className="grid pt-8 grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="group bg-white/5 hover:bg-white/10 transition-all p-4 rounded-2xl flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
                    >
                        <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className="mb-2 rounded"
                        />
                        <span className="text-white font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
