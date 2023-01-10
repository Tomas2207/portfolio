import bgVideo from '../assets/bg-video.mp4';

const Home = () => {
  return (
    <div className="home section__padding" id="home">
      <video className="video" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <p className=" tracking-in-expand">Hi, I am Tomas Abraham</p>
      <h2 className="home-subtitle text-focus-in">Fullstack Developer</h2>
      <div className="header__button">
        <a href="#projects">
          <button className="home-btn puff-in-center">My work</button>
        </a>
        <a href="#contact">
          <button className="home-btn puff-in-center">Contact me</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
