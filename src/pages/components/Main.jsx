import Link from 'next/Link';
import React from 'react'; 
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (

        <div id='home' className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center font-[Arial]">
                <div>
                    <h1 className="py-4 text-[#232323] text-6xl font-[Helvetica]">
                        Hi, I&apos;m <span className="text-[#f45d48]">Julian</span>
                    </h1>
                    <h2 className="py-2 text-[#222525] font-[Arial]">
                        Software Engineer
                    </h2>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <a
                            href="https://www.linkedin.com/in/julian-r-grande/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-md shadow-[#f45d48] p-6 cursor-pointer hover:scale-75 ease-in duration-200">
                                <FaLinkedinIn />
                            </div>
                        </a>

                        <a
                            href="https://github.com/JulianGrande/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-md shadow-[#f45d48] p-6 cursor-pointer hover:scale-75 ease-in duration-200">
                                <FaGithub />
                            </div>
                        </a>

                        <Link href="https://drive.google.com/file/d/1ceDuzclr3iZY0oL1IO1WxQaF3LRaHSsZ/view?usp=sharing">
                            <div className="rounded-full shadow-md shadow-[#f45d48] p-6 cursor-pointer hover:scale-75 ease-in duration-200">
                                <BsFillPersonLinesFill />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Main;