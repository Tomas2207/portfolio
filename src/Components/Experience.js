import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const contributions = [
  {
    number: "01",
    title: "Corvar — Interactive mapping application",
    description:
      "Developed an interactive mapping platform for ski resorts, enabling visitors to explore trails, lifts, and resort information through an intuitive map interface. Also contributed to a dedicated admin panel where resort staff can manage their content and data.",
    stack:
      "React · Vite · TypeScript · Mapbox GL JS · Node.js · React Query · Tailwind CSS · Neon",
    link: "https://maps.skisummitridge.com/home",
  },
  {
    number: "02",
    title: "REAL Leaderboard — AI model performance benchmark",
    description:
      "Built a leaderboard platform for tracking and comparing AI model performance across benchmarks involving simulated applications and real-world scenarios. Developed features for presenting benchmark results and monitoring model progress.",
    stack: "React · Next.js · TypeScript · Node.js · Supabase · Tailwind CSS",
    link: "https://www.realevals.ai/",
  },
  {
    number: "03",
    title: "candidate.fyi - Recruiter management platform",
    description:
      "Developed a recruitment management platform for organizing candidates, job postings, meetings, and hiring progress. Also implemented an admin panel for managing company employees and related data.",
    stack:
      "React · Next.js · TypeScript · Node.js · PostgreSQL · Material UI · Tailwind CSS",
  },
];

const technologies = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
];

const Experience = () => {
  return (
    <section className="experience section__padding" id="experience">
      <div className="experience__inner">
        <motion.div
          className="experience__heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow">01 / EXPERIENCE</p>
          <h2>Professional experience</h2>
          <p className="experience__intro">
            Over three years of experience working with international clients to
            develop and maintain production web applications.
          </p>
        </motion.div>

        <motion.div
          className="experience__entry"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="experience__entry-top">
            <div>
              <h3>Full-Stack Developer</h3>
              <p className="experience__company">Independent · Upwork</p>
            </div>

            <a
              href="https://www.upwork.com/freelancers/~016e3e456f54dfa20f"
              target="_blank"
              rel="noopener noreferrer"
              className="experience__link"
            >
              Upwork profile <FiArrowUpRight />
            </a>
          </div>

          <div className="experience__metadata">
            <span>2023 — Present</span>
            <span>Remote</span>
            <span className="experience__recognition">
              <span>
                <FaStar />
              </span>{" "}
              Top Rated Plus Freelancer
            </span>
          </div>

          <p className="experience__summary">
            Working with international clients to build, maintain, and improve
            web applications. Primarily focused on frontend development with
            React and Next.js, alongside backend integrations and database
            related work.
          </p>

          <div className="experience__contributions">
            <div className="experience__subheading">
              <h4>Selected contributions</h4>
              <span>01 — 03</span>
            </div>

            {contributions.map((item, index) => {
              const content = (
                <>
                  <span className="experience__number">{item.number}</span>

                  <div className="experience__contribution-content">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <span className="experience__contribution-stack">
                      {item.stack}
                    </span>
                  </div>

                  {item.link && (
                    <FiArrowUpRight className="experience__contribution-arrow" />
                  )}
                </>
              );

              return (
                <motion.article
                  className={`experience__contribution ${
                    item.link ? "experience__contribution--clickable" : ""
                  }`}
                  key={item.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience__contribution-link"
                      aria-label={`Visit ${item.title}`}
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="experience__inner">
        <motion.div
          className="experience__entry"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="experience__entry-top">
            <div>
              <h3>Full Stack ReactJS Developer</h3>
              <p className="experience__company">Norsia</p>
            </div>
          </div>

          <div className="experience__metadata">
            <span>June 2023 — December 2023</span>
            <span>Remote</span>
          </div>

          <p className="experience__summary">
            Worked directly with the CEO to improve a financial web platform,
            focusing on UI refinements, responsive design, and bug resolution.
            Redesigned key pages and layouts, contributing to a 40% increase in
            user engagement. Improved the mobile experience and resolved the
            majority of identified platform issues while delivering all key
            project objectives.
          </p>

          <span className="experience__contribution-stack">
            React · Next.js · TypeScript · Node.js · MongoDB · Tailwind CSS
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
