import React, { useEffect, useState } from 'react';
import About from './About';
import Menus from './Menus';
import Contact from './Contact';
 
const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div className="Home">
      <article>
        <About />
        <Menus />
        <Contact />
      </article>
    </div>
  );
};

export default Home;