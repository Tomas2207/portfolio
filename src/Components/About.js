import Tech from './Tech';
import { motion } from 'framer-motion';

const About = ({ isVisible }) => {
  return (
    <div className="about section__padding" id="about">
      <h3 className="about-title">About</h3>
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
          <p>
            Full stack developer with a background in literature and teaching.
          </p>
          <p>
            Fascinated with the world of creating web pages, I'm on a life-long
            journey to master and learn new technologies, as well as teaching
            them.
          </p>
          <p>
            On my free time I like writing as a hobby, and taking care of my dog
            Copito
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
              <Tech image="/icons/tailwind.svg" name="Tailwind" />
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
              <Tech image="/icons/postgres.svg" name="Postgresql" />
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
            <h2>Misc.</h2>
            <div className="about-tech">
              <Tech image="/icons/git.svg" name="Git" />
              <Tech image="/icons/webpack.svg" name="Webpack" />
              <Tech image="/icons/download.svg" name="Github" />
              <Tech image="/icons/npm.svg" name="NPM" />
              <Tech image="/icons/linux.svg" name="Linux" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
