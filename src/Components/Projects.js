const Projects = () => {
  return (
    <div className="about" id="projects">
      <div className="about-content">
        <h3 className="about-title">Projects</h3>
      </div>
      <div className="project-container">
        <img src="img/bank-page.png" alt="" />
        <div>
          <h3>Bank Landing Page (React)</h3>

          <a href="https://github.com/Tomas2207/bank-page" target="_blank">
            <button>View Code</button>
          </a>

          <a href="https://tomas2207.github.io/bank-page/" target="_blank">
            <button>Live Preview</button>
          </a>
        </div>
      </div>
      <div className="project-container">
        <div>
          <h3>E-commerce Site (React)</h3>

          <a href="https://github.com/Tomas2207/shopping-cart" target="_blank">
            <button>View Code</button>
          </a>

          <a href="https://tomas2207.github.io/shopping-cart/" target="_blank">
            <button>Live Preview</button>
          </a>
        </div>
        <img src="img/shopping-cart.png" alt="" />
      </div>
    </div>
  );
};

export default Projects;
