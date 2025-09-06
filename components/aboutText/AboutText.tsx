"use client"
import { motion } from "framer-motion";

export default function AboutText() {
    return (
        <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex-1 text-white">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    I&apos;m Fatima Souliman, a Front-End Developer with over 2.5 years of experience in building responsive, user-friendly websites using React, Next.js, TypeScript, and Tailwind CSS. I&apos;m passionate about delivering high-quality code and mentoring newcomers in the tech world. I co-lead a team that supports new developers by offering real project experience and guidance.
                </p>

                <a
                    href="/Fatima Marwan Souliman.pdf"
                    download
                    className="inline-block mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition font-medium"
                >
                    Download CV
                </a>
            </div>
            )
        </motion.div>
    )
}
