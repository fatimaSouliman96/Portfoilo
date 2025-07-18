import ProjectCard from '../projectCard/ProjectCard'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
    return (
        <div className='w-full pb-8 pt-8' >
            <div className='w-1/2 h-[1px] bg-secondary mx-auto mb-8 shadow-[-3px_5px_20px_0px_#ffffff]' ></div>
            <p className='text-white text-4xl font-extrabold leading-[4rem]' >
                Projects
            </p>
            <div className='grid grid-cols-3 gap-4 w-full pt-8' >
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
            </div>
            <div className='w-1/2 mx-auto mt-8' >
                <Link href="#" className='w-1/2 text-center block text-white mt-8 mx-auto font-bold bg-accent rounded-[3rem] p-2  hover:bg-white hover:text-accent transition-all duration-300' >See more <Image alt='arrow' width={10} height={10} src="/arrow-right-white.svg" /> </Link>
            </div>
        </div>
    )
}
