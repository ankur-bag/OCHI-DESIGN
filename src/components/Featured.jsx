import React, { useState } from 'react';
import { motion, easeInOut } from 'framer-motion';

const Featured = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className='text-6xl font-["Bungee"]'>Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">

          <div 
            className="cardcontainer w-1/2 h-[75vh] rounded-xl relative" 
            onMouseEnter={() => setHoveredCard('saliance')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h1 className="absolute z-[9] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Bungee'] flex overflow-hidden text-7xl text-center text-[#CDEA68]">
              {"saliance lab".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={hoveredCard === 'saliance' ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: easeInOut, duration: 0.5, delay: index * 0.1 }}
                  className="inline-block will-change-transform"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl relative z-0">
              <img 
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" 
                alt="[translate:Saliance Lab]" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div 
            onMouseEnter={() => setHoveredCard('medallia')} 
            onMouseLeave={() => setHoveredCard(null)} 
            className="cardcontainer w-1/2 h-[75vh] rounded-xl relative"
          >
            <h1 className="absolute z-[9] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Bungee'] flex overflow-hidden text-5xl text-center text-[#CDEA68]">
              {`medallia experience`.split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={hoveredCard === 'medallia' ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: easeInOut, duration: 0.5, delay: index * 0.1 }}
                  className="inline-block will-change-transform justify-center"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl relative z-0">
              <img 
                src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" 
                alt="[translate:Medallia Experience]" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Featured;
