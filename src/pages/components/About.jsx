import React from 'react';
import Image from 'next/image';
import placeholder from '../../../public/my_images/Specialty_Pizza.jpg'

const About = () => {
    return (

        <div id='about' className="w-full md:h-screen p-2 py-16 items-center flex h-screen">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2 text-center">
                    <h2 className="uppercase text-3xl tracking-widest text-[#f45d48] font-[Helvetica]">
                        About
                        <hr className="w-6 h-1 mx-auto my-4 bg-[#078080] border-0 rounded"></hr>
                    </h2>
                    

                    <p className="py-2 text-[#222525] text-left font-[Arial]">
                        Hello! I'm Julian Grande, aspiring software engineer currently pursuing my degree at Rutgers University, set to graduate in 2024. 
                        Proficient in languages such as Java and C/C++, I specialize in crafting innovative Android apps and libraries. 
                        My journey in computer science is fueled by a <span className="font-bold">profound passion for technology</span>, 
                        and I am genuinely motivated by the dynamic and ever-evolving nature of the field. 
                        My goal is to contribute to the creation of software that not only meets the needs of users but <span className="font-bold text-[#078080]">leaves a lasting impact</span>. 
                    </p>

                    <p className="py-2 text-[#222525] text-left font-[Arial]">
                        Besides Software, I am also deeply passionate about cars and their performance, particularly f1 racing.
                        In my spare time, I like to do weightlifting
                        and I love to listen to rnb and pop music. 
                    </p>
                </div>
                <div className="w-full h-auto m-auto shadow-s shadow-gray-700 rounded-xl items-center justify-center p-4 hover:scale-75 ease-in duration-200 hidden md:inline-block lg:inline-block">
                    <Image src={placeholder} className="rounded-xl" alt='/'></Image>
                </div>
            </div>    
        </div>

    );
};

export default About;