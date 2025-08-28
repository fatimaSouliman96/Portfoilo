import ProjectCard from '@/components/projectCard/ProjectCard'
import { projectsData } from '@/constant/projects'
import React from 'react'

export default function ProjectsPage() {

    return (
        <div className='w-full pb-8 pt-8' >
                <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-white mb-4">My Projects</h1>
                <p className="text-gray-300 max-w-xl mx-auto">
                    A showcase of my professional and personal work — built with modern technologies like React, Next.js, and TypeScript.
                </p>
            </div>
     
            <p className='text-white text-4xl font-extrabold leading-[4rem]' >
                Projects
            </p>
            <div className='grid grid-cols-3 gap-4 w-full pt-8' >
              {
                projectsData?.map((pro) => (
                     <ProjectCard data={pro} key={pro.id} />
                ))
              }
            </div>

        </div>
    )
}
