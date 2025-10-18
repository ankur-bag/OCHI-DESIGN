import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed= "-.2" className=' w-full py-15 bg-[#004D43]  rounded-tl-3xl rounded-tr-3xl'>
      <div className='border-t-2 border-b-2 border-zinc-300 overflow-hidden'>
  <motion.div
    initial={{ x: "0%" }}
    animate={{ x: "-100%" }}
    transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
    className='flex whitespace-nowrap'
  >
    <h1 className='text-[20vw] leading-none mr-10'>WE ARE OCHI</h1>
    <h1 className='text-[20vw] leading-none mr-10'>WE ARE OCHI</h1>
    <h1 className='text-[20vw] leading-none mr-10'>WE ARE OCHI</h1>
  </motion.div>
</div>

    </div>
  )
}

export default Marquee;
