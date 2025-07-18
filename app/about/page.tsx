import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
    return (
        <section className="w-full  flex justify-center px-6 py-16">
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
                    <Image
                        src="/hero.png"
                        alt="Fatima Souliman"
                        fill
                        style={{objectFit: "cover"}}
                        className="w-full h-full object-cover"
                    />
                </div>

              
                <div className="flex-1 text-white">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I'm Fatima Souliman, a Front-End Developer with over 2.5 years of experience in building responsive, user-friendly websites using React, Next.js, TypeScript, and Tailwind CSS. I'm passionate about delivering high-quality code and mentoring newcomers in the tech world. I co-lead a team that supports new developers by offering real project experience and guidance.
                    </p>

                    <a
                        href="/Fatima Marwan Souliman.pdf" 
                        download
                        className="inline-block mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition font-medium"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>

    )
}
