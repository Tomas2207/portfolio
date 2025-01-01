import { motion } from "framer-motion";

const Project = ({
  img_path,
  title,
  desc,
  live_url,
  server,
  code_url,
  images,
  animation_delay,
  isVideo,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: animation_delay,
        x: { duration: 1 },
        default: { ease: "linear" },
      }}
      viewport={{ once: true }}
      className="project"
    >
      <div
        className="img-container"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {isVideo ? (
          <video
            src={img_path}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              objectFit: "cover",
            }}
            muted
            controls
          ></video>
        ) : (
          <img src={process.env.PUBLIC_URL + img_path} alt="" />
        )}
      </div>
      <div className="info">
        <div className="tech__images">
          {images?.map((image, i) => {
            return (
              <img key={i} src={process.env.PUBLIC_URL + image} alt="tech" />
            );
          })}
        </div>
        <h3>{title}</h3>

        <p>{desc}</p>
      </div>

      <div className="buttons">
        <button>
          <a href={live_url} target="__blank">
            Live Preview
          </a>
        </button>
        <button>
          <a href={code_url} target="__blank">
            View Code
          </a>
        </button>
        {server && (
          <button>
            <a href={server} target="__blank">
              View Server Code
            </a>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Project;
