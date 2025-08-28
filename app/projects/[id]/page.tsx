import ProjectCard from "@/components/projectCard/ProjectCard";
import { projectsData } from "@/constant/projects";
import Image from "next/image";

interface ProjectPageProps {
    params: { id: string } // 👈 id نوعه string مش number
}

export default function Page({ params }: ProjectPageProps) {
    const id = Number(params.id); // 👈 نحول الـ id إلى رقم

    const project = projectsData.find(p => p.id === id);

    console.log("Param ID:", id);
    console.log("Project Found:", project);

    if (!project) return <p className="text-white p-8">Project not found</p>;

    return (
        <div className='w-full pb-8 pt-8 flex flex-wrap justify-between'>
            <div className='relative w-[55%] h-96 rounded-[3rem]' >
                <Image style={{ objectFit: 'cover' }} className='rounded-[3rem]' src={project.image} fill alt='project' />
            </div>
            <div className="text-left mb-12  w-2/5">

                <h1 className="text-5xl  font-bold text-white mb-4">{project.title}</h1>
                <p className="text-gray-300 max-w-xl ">  <span  className="text-gray-300 text-lg font-bold max-w-xl ">Description: </span>
                {project.description_sub}</p>
                <br />
                <ul className="text-gray-300 max-w-xl ">
                     <span  className="text-gray-300 text-lg font-bold max-w-xl ">What I developed: </span>

                    {project.description.map((ele, index) => (
                        <li  className="text-gray-300 max-w-xl " key={index} >{ele}</li>
                    ))}</ul>
                <br />
                <p className="text-gray-300 max-w-xl ">
                    <span  className="text-gray-300 text-lg font-bold max-w-xl ">Lang & Tools: </span>
                    {project.lang_tools}</p>
            </div>

        </div>
    );
}
