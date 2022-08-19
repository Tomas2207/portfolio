const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <h3 className="about-title">About</h3>
      </div>
      <div className="about-container">
        <div className="about-info">
          <p>Hi! My name is Tom, and i'm a frontend developer.</p>
          <p>
            Since I was young I was always fascinated with the world of creating
            web pages, and after finding that my previous career choice wasn't
            what I expected, I decided to pursue my dream and teach myself to
            become a web developer.
          </p>
          <p>
            I'm really passionate about web developement, always eager to learn
            new things and challange myself.{' '}
          </p>
        </div>
        <div className="about-tech">
          <div>
            <img src="icons/js.svg" alt="" className="svg-img" />
            <p>Javascript</p>
          </div>
          <div>
            <img src="icons/html.svg" alt="" className="svg-img html" />
            <p>HTML</p>
          </div>
          <div>
            <img src="icons/css.svg" alt="" className="svg-img " />
            <p>CSS3</p>
          </div>
          <div>
            <img src="icons/react.svg" alt="" className="svg-img " />
            <p>React</p>
          </div>
          <div>
            <img src="icons/git.svg" alt="" className="svg-img " />
            <p>Git</p>
          </div>
          <div>
            <img src="icons/webpack.svg" alt="" className="svg-img " />
            <p>Webpack</p>
          </div>
          <div>
            <img src="icons/npm.svg" alt="" className="svg-img " />
            <p>NPM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
