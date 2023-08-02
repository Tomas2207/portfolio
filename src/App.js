import { useEffect, useState } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Projects from './Components/Projects';

const App = () => {
  const [current, setCurrent] = useState('');
  const navLi = document.querySelectorAll('ul a');

  useEffect(() => {
    // Function to handle the scrolling logic
    const handleScroll = () => {
      const offset = 500;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        if (
          window.scrollY >= sectionTop - offset &&
          window.scrollY < sectionBottom - offset
        ) {
          setCurrent(section.getAttribute('id'));
        }
      });

      navLi.forEach((li) => {
        li.classList.remove('active-link');
        if (li.getAttribute('href') === '#' + current) {
          li.classList.add('active-link');
        }
      });
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [current]); // Only re-run the effect if the 'current' state changes

  return (
    <div>
      <Nav />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default App;
