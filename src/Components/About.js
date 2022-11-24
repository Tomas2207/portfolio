const About = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';
  return (
    <div className="about" id="about">
      <div className="about-content">
        <h3 className="about-title">About</h3>
      </div>
      <div className="about-container">
        <div className="about-info">
          <img
            className="profile-img"
            src={process.env.PUBLIC_URL + '/img/profile.png'}
            alt=""
          />
          <p>Hi! My name is Tom, and i'm a fullstack web developer.</p>

          <p>
            Since I was young I was always fascinated with the world of creating
            web pages, and although my curiosity for literature and teaching led
            me to choose a different path at first, the idea of coming back to
            what I once loved doing never left my mind. After some time I
            realized that my real passion was programming, so I decided to
            pursue my dream and teach myself to become a web developer{' '}
          </p>
          <p>
            I'm really passionate about web developement, always eager to learn
            new things and challange myself.{' '}
          </p>
        </div>
        <div className="about-tech">
          <div>
            <img
              src={publicUrl + 'icons/mongodb.svg'}
              alt=""
              className="svg-img "
            />
            <p>MongoDB</p>
          </div>

          <div>
            <img src={publicUrl + 'icons/js.svg'} alt="" className="svg-img" />
            <p>Javascript</p>
          </div>
          <div>
            <img
              src={publicUrl + 'icons/git.svg'}
              alt=""
              className="svg-img "
            />
            <p>Git</p>
          </div>
          <div>
            <img
              src={publicUrl + 'icons/express.svg'}
              alt=""
              className="svg-img "
            />
            <p>Express</p>
          </div>

          <div>
            <img
              src={publicUrl + 'icons/html.svg'}
              alt=""
              className="svg-img html"
            />
            <p>HTML</p>
          </div>
          <div>
            <img
              src={publicUrl + 'icons/npm.svg'}
              alt=""
              className="svg-img "
            />
            <p>NPM</p>
          </div>

          <div>
            <img
              src={publicUrl + 'icons/react.svg'}
              alt=""
              className="svg-img "
            />
            <p>React</p>
          </div>
          <div>
            <img
              src={publicUrl + 'icons/css.svg'}
              alt=""
              className="svg-img "
            />
            <p>CSS3</p>
          </div>

          <div>
            <img
              src={publicUrl + 'icons/webpack.svg'}
              alt=""
              className="svg-img "
            />
            <p>Webpack</p>
          </div>

          <div>
            <img
              src={publicUrl + 'icons/nodejs.svg'}
              alt=""
              className="svg-img "
            />
            <p>NodeJs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
