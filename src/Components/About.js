import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    description: "My primary area of focus.",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "TanStack Query",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    description: "Experience building and connecting application services.",
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Tools used for development, collaboration and deployment.",
    technologies: [
      "Git",
      "GitHub",
      "GitLab",
      "NPM",
      "Vite",
      "Webpack",
      "Vercel",
      "Render",
    ],
  },
];

const About = () => {
  return (
    <section className="about section__padding" id="about">
      <div className="about-heading">
        <p className="section-eyebrow">03 /ABOUT</p>
        <h2 className="about-title">A little about me.</h2>
      </div>

      <div className="about-container">
        <motion.div
          className="about-info"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            I'm a freelance full-stack developer based in Argentina, working
            with clients internationally. Over the past three years, I've been
            developing and maintaining web applications, including long term
            work on production applications and SaaS platforms.
          </p>

          <p>
            My primary focus is frontend development with React and Next.js, but
            I also have experience with backend development, API integration,
            and databases. I'm comfortable joining existing projects, getting
            familiar with their codebases, and contributing to their ongoing
            development.
          </p>
        </motion.div>

        <div className="about-skills">
          {skills.map((group, index) => (
            <motion.div
              className="skill-group"
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skill-tags">
                {group.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
