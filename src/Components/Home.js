const Home = () => {
  return (
    <div className="home section__padding" id="home">
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
