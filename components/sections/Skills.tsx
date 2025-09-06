
import React from 'react'
import Skill from '../Skill/Skills';
import { skills } from '@/constant/skills';

export default function Skills() {

    return (
        <div className='w-full pt-8 pb-8' >
             <div className='w-1/2 h-[1px] bg-secondary mx-auto mb-8 shadow-[-3px_5px_20px_0px_#ffffff]' ></div>
            <p className='text-white text-4xl font-extrabold leading-[4rem]' >
                Skills
            </p>
            <div className="grid pt-8 grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
                {skills.map((skill, index) => (
                 <Skill score={skill.score} index={index} icon={skill.icon} name={skill.name} key={index} />
                ))}
            </div>
        </div>
    )
}
