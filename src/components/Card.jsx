import React from 'react'

const Card = () => {
    return (
        <div  className='w-full h-screen bg-zinc-100 py-30 px-15 gap-5 flex '>
            <div className='cardcontainer w-1/2'>
                <div   className='card relative w-full h-[55vh] bg-[#004D43] rounded-xl flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-10 bottom-7 border-[2px] py-1 px-2 text-[#CDEA68] rounded-full border-[#CDEA68]'> @2025-2026</button>
                </div>

            </div>
            <div className='cardcontainer w-1/2 flex gap-5'>

                <div className='bg-zinc-900 h-[55vh] w-1/2 rounded-xl flex items-center justify-center relative'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className= 'absolute left-10 bottom-7 border-[2px] py-1 px-2 text-zinc-100 rounded-full border-zinc-100 tracking-tighter'>RATING 5.0 ON CLUTCH</button>
                </div>
                 <div className='bg-[#212121] h-[55vh] w-1/2 rounded-xl flex items-center justify-center relative'>
                <img  className='w-32'src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className= 'absolute left-10 bottom-7 border-[2px] py-1 px-2 text-zinc-100 rounded-full border-zinc-100 tracking-tighter'>RATING 5.0 ON CLUTCH</button>
                </div>

            </div>


        </div>
    )
}

export default Card
