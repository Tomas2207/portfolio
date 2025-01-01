import { useState } from "react";
import dropdown from "../assets/hamburgermenu.svg";

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

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "nav nav__padding" : "nav_hide nav__padding"}>
      <nav>
        <ul>
          <li>
            <a href="#home" className="home-link">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="projects-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="about-link">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="contact-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="dropdown">
        <a>
          <img src={dropdown} alt="" onClick={() => setToggle(!toggle)} />
        </a>
        {toggle && (
          <div className="dropdown__menu grow-from-top">
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
