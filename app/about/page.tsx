import AboutImage from '@/components/aboutImage/AboutImage'
import AboutText from '@/components/aboutText/AboutText'
import React from 'react'

export default function AboutPage() {
    return (
        <section className="w-full  flex justify-center px-6 py-16">
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
                <AboutImage />
                <AboutText />
            </div>
        </section>

    )
}
