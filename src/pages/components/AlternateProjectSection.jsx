import React from "react";
import Image from "next/image";
import Link from "next/Link";
import { BsGithub } from "react-icons/bs";
import placeholderpic from "../../../public/my_images/cropped_spec_pizza.png"

const projects = [

    {

        name: "User Level Threading Library",
        description: "A library in C that allows for multithreading in the user space utilizing a FIFO scheduling policy",
        image: placeholderpic,
        github: "https://github.com/JulianGrande/RefactoredTL",

    },

    {

        name: "Android Pizzeria App",
        description: "Android application for pizza order management, implemented using Android Studio, Gradle, and Java",
        image: placeholderpic,
        github: "https://github.com/JulianGrande/RefactoredTL", 

    },

    {

        name: "TBA",
        description: "TBA",
        image: placeholderpic,
        github: "https://github.com/JulianGrande/RefactoredTL",

    },

]

const AlternateProjectSection = () => {
    return (

        <div id="alternateProjects">
            <h2 className="text-2xl tracking-widest uppercase text-[#f45d48] font-[Helvetica] text-center">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-[#078080] border-0 rounded"></hr>
            </h2>

            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => {
                    return (

                        <div key={idx}> 
                            <div className="flex flex-col space-x-10 md:flex-row md:space-x-12">
                                <div className="md:w-1/2 px-20">
                                    <Link href={project.github}>
                                        <Image src={placeholderpic} alt="" width={1000} height={1000} className="rounded-xl shadow-xl hover:opacity-70"></Image>
                                    </Link>
                                </div>

                                <div className="mt-8 md:w-1/2 text-[#222525]">
                                    <h1 className="text-4xl font-bold mb-6 font-[Helvetica]">
                                        {project.name}
                                    </h1>

                                    <p className="text-xl leading-7 mb-4 font-[Arial]">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-row align-bottom space-x-4">
                                        <Link href={project.github} target="_blank">
                                            <BsGithub size={30} className="hover:-translate-y-1 transition-transform cursor-pointer"></BsGithub>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>

    );
};

export default AlternateProjectSection;