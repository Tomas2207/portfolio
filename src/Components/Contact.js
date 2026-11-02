import { FiArrowUpRight, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

const Contact = () => {
  const email = "tomas.abraham@outlook.es";

  const links = [
    {
      label: "GitHub",
      href: "https://github.com/Tomas2207",
      icon: FiGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tomas-abraham/",
      icon: FiLinkedin,
    },
    {
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~016e3e456f54dfa20f",
      icon: SiUpwork,
    },
  ];

  return (
    <section className="contact section__padding" id="contact">
      <div className="contact__container">
        <div className="contact__content">
          <p className="section-eyebrow">04 / GET IN TOUCH</p>

          <h2>
            Have a project
            <br />
            in mind?
          </h2>

          <p className="contact__description">
            I'm always open to discussing new projects, interesting ideas, or
            opportunities to work together.
          </p>

          <a href={`mailto:${email}`} className="contact__email">
            <span className="contact__email-icon">
              <FiMail />
            </span>
            <span>{email}</span>
            <FiArrowUpRight className="contact__arrow" />
          </a>

          <div className="contact__socials">
            <span>Find me elsewhere</span>

            <div className="contact__social-links">
              {links.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="contact__side">
          <span className="contact__side-label">PREFER EMAIL?</span>
          <h3>Let's start a conversation.</h3>
          <p>
            Tell me a little about what you're building. I'll get back to you as
            soon as I can.
          </p>
          <a href={`mailto:${email}`} className="contact__button">
            Send me an email <FiArrowUpRight />
          </a>
        </div> */}
      </div>

      <footer className="contact__footer">
        <span>© {new Date().getFullYear()} Tomas Abraham</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </section>
  );
};

export default Contact;
