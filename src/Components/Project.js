const Project = ({ props }) => {
  return (
    <div className="project-container">
      <img src={process.env.PUBLIC_URL + props.img_path} alt="" />
      <div className="project-sub-container">
        <h3>{props.project_name}</h3>
        {props.desc && <p className="project-info">{props.desc}</p>}

        <a href={props.code_url} target="_blank">
          <button>View Code</button>
        </a>
        {props.server && (
          <a href={props.server} target="_blank">
            <button>View Server Code</button>
          </a>
        )}

        <a href={props.live_url} target="_blank">
          <button>Live Preview</button>
        </a>
      </div>
    </div>
  );
};

export default Project;
