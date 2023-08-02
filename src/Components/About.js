import Tech from './Tech';
import { motion } from 'framer-motion';
import { TbBrandNextjs } from 'react-icons/tb';
import { AiFillGithub, AiFillGitlab, AiFillHtml5 } from 'react-icons/ai';
import { FaNodeJs, FaReact, FaUbuntu } from 'react-icons/fa';
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNpm,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
  SiMui,
} from 'react-icons/si';
import { BsGit } from 'react-icons/bs';

const About = ({ isVisible }) => {
  return (
    <section className="about section__padding" id="about">
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
            Full-Stack developer with a background in literature and teaching, I
            bring a unique perspective and a passion for clear communication and
            user-centered design to my work.
          </p>
          <p>
            {' '}
            I'm committed to creating intuitive and engaging web experiences
            that make a positive impact on users
          </p>
          <p>
            I'm constantly learning new technologies and techniques to refine my
            skills, and I'm equally dedicated to sharing my knowledge with
            others.
          </p>
          <p>
            In my free time, I enjoy writing as a creative outlet and spending
            time with my furry companion, Copito.
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
              <div>
                <TbBrandNextjs className="tech_icon" size={55} />
                <p>NextJs</p>
              </div>
              <div>
                <FaReact className="tech_icon" size={55} />
                <p>React</p>
              </div>
              <div>
                <SiJavascript className="tech_icon" size={55} />
                <p>Javascript</p>
              </div>
              <div>
                <SiTypescript className="tech_icon" size={55} />
                <p>Typescript</p>
              </div>
              <div>
                <SiHtml5 className="tech_icon" size={55} />
                <p>HTML5</p>
              </div>
              <div>
                <SiCss3 className="tech_icon" size={55} />
                <p>CSS3</p>
              </div>
              <div>
                <SiTailwindcss className="tech_icon" size={55} />
                <p>Tailwindcss</p>
              </div>
              <div>
                <SiMui className="tech_icon" size={55} />
                <p>Material UI</p>
              </div>
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
              <div>
                <FaNodeJs className="tech_icon" size={55} />
                <p>NodeJs</p>
              </div>
              <div>
                <SiExpress className="tech_icon" size={55} />
                <p>Express</p>
              </div>
              <div>
                <SiMongodb className="tech_icon" size={55} />
                <p>MongoDB</p>
              </div>
              <div>
                <SiPostgresql className="tech_icon" size={55} />
                <p>PostgreSQL</p>
              </div>
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
              <div>
                <BsGit className="tech_icon" size={55} />
                <p>Git</p>
              </div>
              <div>
                <AiFillGithub className="tech_icon" size={55} />
                <p>Github</p>
              </div>
              <div>
                <AiFillGitlab className="tech_icon" size={55} />
                <p>GitLab</p>
              </div>
              <div>
                <SiWebpack className="tech_icon" size={55} />
                <p>Webpack</p>
              </div>
              <div>
                <SiNpm className="tech_icon" size={55} />
                <p>NPM</p>
              </div>
              <div>
                <SiLinux className="tech_icon" size={55} />
                <p>Linux</p>
              </div>
              <div>
                <FaUbuntu className="tech_icon" size={55} />
                <p>Ubuntu</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
