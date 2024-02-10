import React from 'react';
import Timeline from './Timeline';

const skills = [

    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "Python" },
    { skill: "Java" },
    { skill: "Bash" },
    { skill: "C/C++" },
    { skill: "SQL" },
    { skill: "R" },
    { skill: "Scheme" },
    { skill: "React" },
    { skill: "Next.JS" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "Github" },

]

const Skills = () => {
    return (

        <div id='skills' className="h-screen w-full p-2 py-16">
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="text-center md:w-1/2 md:text-left">
                    <h2 className="text-3xl tracking-widest uppercase text-[#f45d48] font-[Helvetica] text-center">
                        Skills
                        <hr className="w-6 h-1 mx-auto my-4 bg-[#078080] border-0 rounded"></hr>
                    </h2>

                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {skills.map((item, idx) => {
                            return (
                                <p key={idx} className="bg-gray-300 px-4 py-2 mr-2 mt-2 text-[#222525] rounded font-semibold">
                                   {item.skill}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="md:hidden lg:inline">
                <Timeline />
            </div>
        </div>
        

    );
};

export default Skills;