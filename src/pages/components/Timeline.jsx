const Timeline = () => {
    return (

        <div className="scale-[65%] md:scale-100 w-10/12 md:w-7/12 lg:w-6/12 mx-auto my-10">
            {/* <h3 className="text-center text-[#800000]">
                My Career
            </h3> */}

            <div className="border-l-2 mt-10">

                {/* Card 1 */}
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 bg-[#078080] text-[#232323] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* Dot */}
                    <div className="w-5 h-5 bg-[#222525] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
                    </div>

                    {/* Line */}
                    <div className="w-10 h-1 bg-[#f45d48] absolute -left-10 z-0">
                    </div>

                    {/* Content */}
                    <div className="flex-auto">
                        <h3 className="font-[Helvetica]">Hack4Impact - Rutgers, NJ</h3>
                        <h3 className="font-[Arial]">Backend Team Member</h3>
                        <p className="font-[Arial]">Spring 2023</p>
                    </div>

                    <section href="#" className="text-center text-[#222525] font-[Arial]">Full Stack</section>
                </div>


                {/* Card 2*/}
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 bg-[#078080] text-[#232323] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* Dot */}
                    <div className="w-5 h-5 bg-[#222525] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
                    </div>

                    {/* Line */}
                    <div className="w-10 h-1 bg-[#f45d48] absolute -left-10 z-0">    
                    </div>

                    {/* Content */}
                    <div className="flex-auto">
                        <h3 className="font-[Helvetica]">Test</h3>
                        <h3 className="font-[Arial]">Test</h3>
                        <p className="font-[Arial]">Test</p>
                    </div>

                    <section href="#" className="text-center text-[#222525] font-[Arial]">Test</section>
                </div>


                {/* Card 3 */}
            </div>
        </div>

    );
};

export default Timeline;