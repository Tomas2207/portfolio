const Contact = () => {
  return (
    <div className="about" id="contact">
      <div className="about-content">
        <h3 className="about-title">Contact</h3>
      </div>
      <div className="contact-container">
        <a href="mailto: tomas.abraham@outlook.es">
          <button className="contact-btn">
            <img
              src={process.env.PUBLIC_URL + '/icons/email.svg'}
              alt=""
              className="svg-img contact-img"
            />
          </button>
        </a>
        <a href="https://github.com/Tomas2207" target="__blank">
          <button className="contact-btn">
            <img
              src={process.env.PUBLIC_URL + '/icons/github.svg'}
              alt=""
              className="svg-img contact-img"
            />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/tom%C3%A1s-abraham-869083216/"
          target="__blank"
        >
          <button className="contact-btn">
            <img
              src={process.env.PUBLIC_URL + '/icons/linkedin.svg'}
              alt=""
              className="svg-img contact-img"
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
