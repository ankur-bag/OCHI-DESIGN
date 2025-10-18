import React, { useState, useEffect } from 'react';

const Eyes = () => {

    const [rotate ,setRotate] = useState(0)


  useEffect(() => {
  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const deltaX = mouseX - window.innerWidth / 2;
    const deltaY = mouseY - window.innerHeight / 2;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    setRotate(angle - 180);
  };
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);


    return (
        <div>
            <div className='eyes w-full h-screen overflow-hidden'>
                <div  data-scroll data-scroll-speed= "-.7"   className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                    <div className='absolute gap-10 flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                        <div className='w-[15vw] h-[15vw]  bg-zinc-100 rounded-full  flex items-center justify-center'>
                            <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative items-center justify-center '>
                                <div  style= {{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}  className='  line w-full h-10  absolute top-1/2 left-1/2 -translate-x[50%] -translate-y[50%]'>
                                    <div className='w-10 h-10 bg-zinc-100 rounded-full '></div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[15vw] h-[15vw]  bg-zinc-100 rounded-full  flex items-center justify-center'>
                             <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative items-center justify-center '>
                                 <div  style= {{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className=' line w-full h-10  absolute top-1/2 left-1/2 -translate-x[50%] -translate-y[50%]'>
                                    <div className='w-10 h-10 bg-zinc-100 rounded-full '></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
