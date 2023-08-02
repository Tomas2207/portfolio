import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import bgVideo from '../assets/bg-video.mp4';

const Home = () => {
  return (
    <section className="home section__padding" id="home">
      <video className="video" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <p className=" tracking-in-expand">Tomas Abraham</p>
      <h2 className="home-subtitle text-focus-in">Full Stack Developer</h2>
      <div style={{ display: 'flex', gap: 10 }}>
        <a
          href="https://github.com/Tomas2207"
          target="_blank"
          className="tech_home puff-in-center"
        >
          <AiFillGithub size={35} />
        </a>
        <a
          href="https://www.linkedin.com/in/tomas-abraham/"
          target="_blank"
          className="tech_home puff-in-center"
        >
          <AiFillLinkedin size={35} />
        </a>
        <a
          href="mailto: tomas.abraham@outlook.es"
          target="_blank"
          className="tech_home puff-in-center"
        >
          <AiFillMail size={35} />
        </a>
      </div>
      <div className="header__button">
        <a href="#projects">
          <button className="home-btn puff-in-center">My work</button>
        </a>
        <a href="#contact">
          <button className="home-btn puff-in-center">Contact me</button>
        </a>
      </div>
    </section>
  );
};

export default Home;
