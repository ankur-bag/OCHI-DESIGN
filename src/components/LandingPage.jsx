import { animate, motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


const LandingPage = () => {

    return (
        <div>
            <div data-scroll  data-scroll-speed= "-.3" className='w-full h-auto text-white  bg-zinc-900'>
                <div className='textstructure'>
                    <div className='masker font-["Bungee"] mt-45 px-20 text-8xl tracking-tighter  font-black leading-none
    bg-gradient-to-t from-[#777] to-[#fff]
    text-transparent bg-clip-text  '>
                        <h1>WE CREATE</h1>
                        <div className='flex items-center'>
                            < motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "9vw" }}
                                transition={{
                                    
                                    ease: [0.76, 0, 0.24, 1],
                                    duration: 1 // Increase this value for a slower marquee
                                }}
                                className='w-28 h-20 bg-green-900 mr-6 rounded-xl border-white justify-center items-center p-5' >
                                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                                </motion.div>
                            <h1>EYE-OPENING</h1>
                        </div>
                        <h1>PRESENTATIONS</h1>
                    </div>


                    <div className='border-t-[1px] border-zinc-800 mt-23 flex justify-between items-center mb-40' >
                        <div className=' flex justify-between items-center gap-75 px-10'>
                            <p>Presentation and storytelling agency</p>
                            <p>For innovation teams and global brands</p>
                        </div>
                        <div className='flex items-center gap-4 ml-8 px-10 mt-2 text-white'>
                            <div className='px-5 py-2 border-2  border-zinc-400 rounded-full font-light  text-md hover:bg-white hover:text-black'>
                                START THE PROJECT
                            </div>
                            <div className='w-10 h-10 border-2 border-zinc-500 rounded-full flex items-center justify-center '>
                                <span className='rotate-45 inline-block'>
                                    <FaArrowUpLong />
                                </span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}


export default LandingPage
