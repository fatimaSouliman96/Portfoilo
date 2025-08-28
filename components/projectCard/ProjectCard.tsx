"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { projectsType } from '@/types/types';
interface ProjectCardProps {
    data: projectsType
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
    return (
        <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: data.id / 5 }}
        >  <div className="w-full bg-white/5 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-700">
                {/* Image Section */}
                <div className="relative w-full h-48">
                    <Image
                        src={data.image}
                        alt="project"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col gap-4">
                    <h2 className="text-white text-2xl font-semibold">{data.title}</h2>
                    <p className="text-white text-sm leading-relaxed opacity-90">
                        {data.description_sub}
                    </p>

                    {/* Button */}
                    <Link
                        href={`/projects/${data.id}`}
                        className="inline-flex items-center self-start gap-2 text-sm font-semibold text-secondary bg-white px-5 py-2 rounded-2xl transition-all duration-700 hover:shadow-[inset_0px_1px_20px_20px_#4f17874f]"

                    >
                        See more
                        <Image
                            src="/arrow-right-white.svg"
                            alt="arrow"
                            width={14}
                            height={14}
                            className="invert transition duration-700 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div></motion.div>

    )
}

export default ProjectCard
