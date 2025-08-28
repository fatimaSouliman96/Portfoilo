"use client"
import { motion } from "framer-motion";
import Image from "next/image";

interface SkillProps {
    icon: string,
    name: string,
    index: number
}
const Skill: React.FC<SkillProps> = ({ icon, name, index }) => {
    return (
        <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: index / 5 }}
        >         <div
            key={name}
            className="group bg-white/5 hover:bg-white/10 transition-all p-4 rounded-2xl flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
        >
                <Image
                    src={icon}
                    alt={name}
                    width={40}
                    height={40}
                    className="mb-2 rounded"
                />
                <span className="text-white font-medium">{name}</span>
            </div></motion.div>

    )
}

export default Skill