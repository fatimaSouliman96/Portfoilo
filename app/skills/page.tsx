import Skill from '@/components/Skill/Skills';
import { skills } from '@/constant/skills';
import React from 'react'

export default function SkillsPage() {

    return (
        <div className='w-full pt-16 pb-8' >
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
                {skills.map((skill, index) => (
                   <Skill key={index} score={skill.score} icon={skill.icon} index={index} name={skill.name}  />

                ))}
            </div>
        </div>
    )
}
