const Home = () => {
  return (
    <div className="home" id="home">
      <p>Hi my name is</p>
      <h1 className="home-name tracking-in-expand ">Tomas Abraham</h1>
      <h2 className="home-subtitle text-focus-in">Fullstack Developer</h2>
      <div className="header__button">
        <a href="#contact">
          <button className="home-btn puff-in-center">Contact me!</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
