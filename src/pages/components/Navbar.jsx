import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/Link';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBG, setNavBG] = useState('#f8f5f2');
    const [linkColor, setLinkColor] = useState('#078080');

    {/* toggle navigation bar on or off after selecting a link */}
    const handleNav = () => {
        setNav(!nav);
    };

    {/* shadow when scrolling down */}
    useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);

      return (
        <div style={{ backgroundColor: `${navBG}` }} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-200' : 'fixed w-full h-20 z-[100]'}>
            {/* Normal navbar */}
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                {/* forces alignment of links to the far right */}
                <Link href="/">
                        <p className="cursor-pointer"> </p>
                </Link>
                <div>
                    <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
                        <li className="ml-10 text-md uppercase hover:border-b font-[Helvetica]">
                            <Link href="/">Home</Link>
                        </li>

                        <li className="ml-10 text-md uppercase hover:border-b font-[Helvetica]">
                            <Link href="/#about">About</Link>
                        </li>

                        <li className="ml-10 text-md uppercase hover:border-b font-[Helvetica]">
                            <Link href="/#projectCards">Projects</Link>
                        </li>

                        <li className="ml-10 text-md uppercase hover:border-b font-[Helvetica]">
                            <Link href="https://drive.google.com/file/d/1ceDuzclr3iZY0oL1IO1WxQaF3LRaHSsZ/view?usp=sharing">Resume</Link> {/* link to drive here too */}
                        </li>
                    </ul>

                    <div style={{ color: `${linkColor}` }} onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            {/* mobile menu */}

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[60%] h-screen bg-[#f8f5f2] p-10 ease-in duration-500' : 'fixed left-[100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-[#eebbc3] p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>

                    </div>

                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li onClick={() => setNav(false)} className="py-4 text-md font-[Helvetica]">
                                    Home
                                </li>
                            </Link>

                            <Link href="/#about">
                                <li onClick={() => setNav(false)} className="py-4 text-md font-[Helvetica]">
                                    About
                                </li>
                            </Link>

                            <Link href="/#projectCards">
                                <li onClick={() => setNav(false)} className="py-4 text-md font-[Helvetica]">
                                    Projects
                                </li>
                            </Link>

                            <Link href="https://drive.google.com/file/d/1ceDuzclr3iZY0oL1IO1WxQaF3LRaHSsZ/view?usp=sharing"> {/* link to drive here too */}
                                <li onClick={() => setNav(false)} className="py-4 text-md font-[Helvetica]">
                                    Resume
                                </li>
                            </Link>
                        </ul>

                        {/* Icons */}
                        <div className="pt-40">
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <a
                                    href="https://www.linkedin.com/in/julian-r-grande/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    
                                    <div className="rounded-full shadow-lg shadow-[#eebbc3] p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                        <FaLinkedinIn />
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/JulianGrande/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    
                                    <div className="rounded-full shadow-lg shadow-[#eebbc3] p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                        <FaGithub />
                                    </div>
                                </a>

                                <Link href="https://drive.google.com/file/d/1ceDuzclr3iZY0oL1IO1WxQaF3LRaHSsZ/view?usp=sharing"> {/* link to Drive here too */}
                                    <div onClick={() => setNav(!nav)} className="rounded-full shadow-lg shadow-[#eebbc3] p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                        <BsFillPersonLinesFill />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;