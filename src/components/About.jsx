import React from 'react';

const About = () => {
    return (
        <div>
            <div className='w-full pt-24 pb-10 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-zinc-800'>
                <h1 className='font-["Audiowide"] text-5xl'>
                    We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.
                </h1>
            </div>
            <div className="border-b w-full border-black"></div>
            <div className='w-full pt-5 pb-20 px-20 bg-[#CDEA68]  flex  text-black text-lg font-["Poiret One"]'>
                <div className='w-2/4 '>
                    <h1 className='text-md '>What you can expect:</h1>
                </div>
                <div className='w-1/4 '>
                    We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: "I want in!" <br /> <br/>

                    Our clients make the world go round – from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants.  <br /> <br/>

                    Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo
                </div>
                <div className='w-1/4 justify-end flex '> 
                S: <br/>
                    Instagram <br/> 
                    Behance<br/>
                    Facebook<br/>
                    Linkedin</div>
            </div>
            <div className='w-full  bg-[#CDEA68] border-t-[1px] border-black font-["Poiret One"] flex rounded-bl-3xl rounded-br-3xl'>
                <div className='w-1/2 px-10 py-5'>
                    <h1 className='text-black text-6xl' >How we can help:</h1>
                    <button className='px-5 py-4 bg-zinc-900 rounded-full text-white text-lg mt-2  flex gap-7 items-center'>READ MORE
                        <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>

                <div className='w-1/2 px-10 py-5 mb-10'>
                    <img  className= 'rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default About;
