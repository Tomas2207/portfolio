import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <p className="home-eyebrow">PORTFOLIO</p>

        <h1 className="home-title">
          Tomas
          <br />
          Abraham<span className="home-title-period">.</span>
        </h1>

        <h2 className="home-role">Full-Stack Developer</h2>

        <p className="home-description">
          Over 3 years of experience developing and maintaining production web
          applications for international clients. Focused on React and Next.js,
          with experience across the full stack.
        </p>

        <div className="home-actions">
          <a href="#experience" className="home-btn primary">
            View experience <FiArrowUpRight />
          </a>

          <a
            href="mailto:tomas.abraham@outlook.es"
            className="home-btn secondary"
          >
            Get in touch
          </a>
        </div>

        <div className="home-socials">
          <a
            href="https://github.com/Tomas2207"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <AiFillGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/tomas-abraham/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />
          </a>

          <a href="mailto:tomas.abraham@outlook.es" aria-label="Email">
            <AiFillMail />
          </a>

          <a
            href="https://www.upwork.com/freelancers/~016e3e456f54dfa20f"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork"
          >
            <SiUpwork />
          </a>
        </div>
      </div>

      <div className="home-index" aria-hidden="true">
        <span>01</span>
        <span className="home-index-line" />
        <span>04</span>
      </div>
    </section>
  );
};

export default Home;
