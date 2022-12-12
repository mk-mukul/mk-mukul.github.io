import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Project = ({ isRight, project }) => {

    const [matches, setMatches] = useState(false);

    useEffect(() => {
        setMatches(window.innerWidth < 768)
        window.addEventListener("resize", () => {
            setMatches(window.innerWidth < 768)
        })
    }, []);

    const myStyle = (matches) => {
        return ({
            backgroundImage: matches ? `url(${project.imgLink})` : 'none',
        })
    }

    return (
        <>
            <div className={` grid md:grid-cols-12 rounded-md bg-center my-4 md:my-10`} style={myStyle(matches)}>
                <div className={` ${isRight ? " col-start-1 col-end-8" : "col-start-6 col-end-13"} row-start-1 row-end-1 hidden md:flex md:justify-end bg-opacity-0`}>
                    <a
                        className="flex flex-col h-min self-center rounded cursor-pointer bg-textSecondary"
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="rounded opacity-[80%] hover:opacity-[100%]"
                            width={project.img.width}
                            height={project.img.height}
                            src={project.img.link}
                            alt={project.img.alt}
                        />
                    </a>
                </div>
                <div className={` self-center row-start-1 row-end-1 z-10 flex flex-col rounded-md drop-shadow-lg md:drop-shadow-none hover:drop-shadow-xl md:hover:drop-shadow-none px-5 pt-8 md:p-0 bg-bgSecondary md:bg-transparent ${isRight ? "md:text-right col-start-7 col-end-13" : "col-start-1 col-end-7"}`}>
                    <h3 className=' font-mono text-textSecondary text-xs md:text-sm mb-2'>Featured Project</h3>
                    <h2 className=" text-xl opacity-100 md:text-2xl font-bold">{project.title}</h2>
                    <div className={` md:drop-shadow-md md:bg-bgSecondary rounded-sm md:px-6 py-2 md:pt-5 my-5 text-left`}>
                        {project.desc.map((val, ind) => {
                            return (
                                <div key={ind}>
                                    <p>{val}</p>
                                    <br />
                                </div>
                            )
                        })}
                    </div>
                    <ul className={` flex flex-wrap font-fira font-bold text-xs gap-y-1 gap-x-4 ${isRight ? "md:justify-end" : ""}`}>
                        {project.tech.map((val, ind) => {
                            return (
                                <li key={ind}>{val}{" "}</li>
                            )
                        })}
                    </ul>
                    <div className={` flex gap-1 text-xl py-3 ${isRight ? " md:justify-end" : ""}`}>
                        {project.links.map((val, ind) => {
                            return (
                                <a key={ind} className=" text-textSecondary p-2 hover:translate-y-[-4px] transition-all" href={val.link} target="_blank" rel="noreferrer" >
                                    {val.for == "github" ? <FiGithub /> : ""}
                                    {val.for == "website" ? <FiExternalLink /> : ""}
                                </a>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Project
