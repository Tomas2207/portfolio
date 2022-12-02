import Tech from './Tech';
import { motion } from 'framer-motion';

const About = ({ isVisible }) => {
  return (
    <div className="about" id="about">
      <div className="about-content"></div>
      <div className="about-container">
        <motion.div
          initial={{ x: '-30vw', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            x: { duration: 1 },
            default: { ease: 'linear' },
          }}
          className="about-info"
        >
          <h3 className="about-title">About</h3>
          <p>
            I've always been fascinated with the world of creating web pages,
            and although my curiosity for literature and teaching led me to
            choose a different path at first, the idea of coming back to what I
            once loved doing never left my mind. After some time I realized that
            my real passion was programming, so I decided to pursue my dream and
            teach myself to become a web developer
          </p>
        </motion.div>
        <div className="tech__section">
          <motion.div
            initial={{ y: +50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              y: { duration: 1 },
              default: { ease: 'linear' },
            }}
          >
            <h2>Front End</h2>
            <div className="about-tech">
              <Tech image="/icons/html.svg" name="HTML" />
              <Tech image="/icons/css.svg" name="CSS" />
              <Tech image="/icons/js.svg" name="Javascript" />
              <Tech image="/icons/react.svg" name="React" />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: +50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1,
              y: { duration: 1 },
              default: { ease: 'linear' },
            }}
          >
            <h2>Back End</h2>
            <div className="about-tech">
              <Tech image="/icons/nodejs.svg" name="NodeJs" />
              <Tech image="/icons/express.svg" name="Express" />
              <Tech image="/icons/mongodb.svg" name="MongoDB" />
              <Tech image="/icons/ejs.svg" name="EJS" />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: +50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.5,
              y: { duration: 1 },
              default: { ease: 'linear' },
            }}
          >
            <h2>Other</h2>
            <div className="about-tech">
              <Tech image="/icons/git.svg" name="Git" />
              <Tech image="/icons/webpack.svg" name="Webpack" />
              <Tech image="/icons/download.svg" name="Github" />
              <Tech image="/icons/linux.svg" name="Linux" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
