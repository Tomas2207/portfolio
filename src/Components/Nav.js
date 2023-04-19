import { useState } from 'react';
import dropdown from '../assets/hamburgermenu.svg';

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'nav nav__padding' : 'nav_hide nav__padding'}>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="https://blog-tomas2207.vercel.app/" target="__blank">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className="dropdown">
        <a>
          <img src={dropdown} alt="" onClick={() => setToggle(!toggle)} />
        </a>
        {toggle && (
          <div className="dropdown__menu tilt-in-top-2">
            <a onClick={() => setToggle(!toggle)} href="#home">
              Home
            </a>
            <a onClick={() => setToggle(!toggle)} href="#projects">
              Projects
            </a>
            <a onClick={() => setToggle(!toggle)} href="#about">
              About
            </a>
            <a onClick={() => setToggle(!toggle)} href="#contact">
              Contact
            </a>
            <a
              onClick={() => setToggle(!toggle)}
              href="https://blog-tomas2207.vercel.app/"
              target="__blank"
            >
              Blog
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
