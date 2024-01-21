import React from "react";
import Image from "next/image";
import Link from "next/Link";
import SlideUp from "./Slideup";
import { BsGithub } from "react-icons/bs";
import placeholderpic from "../../../public/my_images/cropped_spec_pizza.png"

{/** third project not yet rdy to share

  {

        name: "TBA",
        description: "TBA",
        image: placeholderpic,
        github: "https://github.com/JulianGrande/RefactoredTL",
        readMe: "https://github.com/JulianGrande/RefactoredTL/blob/master/README.md",

    },

 */}

const projects = [

    {

        name: "User Level Threading Library",
        description: "A library in C that allows for multithreading in the user space utilizing a FIFO scheduling policy",
        image: placeholderpic,
        github: "https://github.com/JulianGrande/RefactoredTL",
        readMe: "https://github.com/JulianGrande/RefactoredTL/blob/master/README.md",
        
    },

    {

        name: "Android Pizzeria App",
        description: "Android app for pizza order management, implemented using Android Studio, Gradle, and Java",
        image: placeholderpic,
        github: "https://github.com/JulianGrande/Android-Pizza-Pal",
        readMe: "https://github.com/JulianGrande/RefactoredTL/blob/master/README.md",
        
    },


]

const AlternateProjectSection = () => {
    return (
      <section id="projects" className="w-full p-2 py-16">
        <h2 className="my-10 text-center uppercase font-bold text-3xl font-[Helvetica] text-[#f45d48]">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-[#078080] border-0 rounded"></hr>
        </h2>
  
        <div className="flex flex-col space-y-28 items-center">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className="md:w-1/2">
                      <Link href={project.readMe}>
                        <Image
                          src={project.image}
                          alt=""
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="mt-8 md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6 text-[#222525] font-[Helvetica]">{project.name}</h1>
                      <p className="text-xl leading-7 mb-4 text-[#222525] font-[Arial]">
                        {project.description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>
            );
          })}
        </div>
      </section>
    );
  };

export default AlternateProjectSection;