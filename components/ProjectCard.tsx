import React, { MouseEvent, useState } from 'react'
import Image from 'next/image'

interface ProjectCardProps{
    name: string,
    description: string,
    image: string,
    link: string
}

const ProjectCard: React.FC<ProjectCardProps> = props => {
    const [hoverCheck,hoverState] = useState(false);

    const handleMouseOver  = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        hoverState(true)
    }

    const handleMouseLeave  = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        hoverState(false)
    }
    if(!hoverCheck){
        return(
            <a href={props.link} className="relative flex flex-col rounded-md border-2 w-64 h-64 shadow-xl shadow-cyan-500" onMouseOver={handleMouseOver} 
            onMouseLeave={handleMouseLeave}>
                <Image src={props.image} alt="project image" width={500} height={500}
                className = "absolute w-full h-full opacity-40"/>
                <h2 className="relative italic text-center text-2xl bg-black w-3/4 m-auto">{props.name}</h2>
            </a>
        )
    }
    else{
        return(
            <a href={props.link} className="relative flex flex-col overflow-auto rounded-md border-2 w-64 h-64 max-w-64 max-h-64 shadow-lg shadow-pink-500" onMouseOver={handleMouseOver} 
            onMouseLeave={handleMouseLeave}>
                <h3 className="break-words text-center mt-10 pt-2 pl-2 pr-2">{props.description}</h3>
                <Image src={props.image} alt="project image" width={500} height={500}
                className="absolute w-full h-full blur-sm opacity-20 bg-cover z-0"/>
                <h2 className="italic text-center mt-5 mb-2 text-2xl bg-black w-3/4 ml-auto mr-auto z-10">{props.name}</h2>
            </a>
        )
    }
}

export default ProjectCard