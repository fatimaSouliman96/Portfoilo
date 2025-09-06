"use client"
import { motion } from "framer-motion";
import Image from "next/image";

interface SkillProps {
    icon: string,
    name: string,
    index: number,
    score: string
}
const Skill: React.FC<SkillProps> = ({ icon, name, index, score }) => {
    return (
        <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: index / 5 }}
        >         <div
            key={name}
            className="gap-1 h-28 bg-white/5 hover:bg-white/10 transition-all p-4 rounded-2xl flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
        >
                <div className="h-10 w-10" >
                    <Image
                        src={icon}
                        alt={name}
                        width={40}
                        height={40}
                        className="rounded mb-2"
                    />
                </div>
                <span className="text-sm text-gray-400">{score}</span>
                <span className="text-base text-white font-semibold">{name}</span>

            </div></motion.div>

    )
}

export default Skill