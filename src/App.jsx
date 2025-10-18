import { useRef, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
      class: 'is-reveal',
    });
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="w-full min-h-screen bg-black text-white overflow-hidden"
    >
      <div data-scroll-section>
        <Navbar />
      </div>
      <div data-scroll-section>
        <LandingPage />
      </div>
      <div data-scroll-section>
        <Marquee />
      </div>
      <div data-scroll-section>
        <About />
      </div>
      <div data-scroll-section>
        <Eyes />
      </div>
      <div data-scroll-section>
        <Featured />
      </div>
      <div data-scroll-section>
        <Card />
      </div>
      <div data-scroll-section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
