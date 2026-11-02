import { useEffect, useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setToggle(false);

  const links = [
    { label: "Experience", href: "#experience" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__padding">
        <a href="#home" className="nav__logo" onClick={closeMenu}>
          TA.
        </a>

        <nav className="nav__desktop">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`nav__toggle ${toggle ? "is-open" : ""}`}
          onClick={() => setToggle(!toggle)}
          aria-label="Toggle navigation"
          aria-expanded={toggle}
        >
          <span />
          <span />
        </button>

        {toggle && (
          <nav className="nav__mobile">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Nav;
