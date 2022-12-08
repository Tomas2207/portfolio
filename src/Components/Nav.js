import { useState } from 'react';
import dropdown from '../assets/dropdown.png';

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="nav nav__padding">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
