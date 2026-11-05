import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "I'm delighted to commend Tomas for their outstanding work on a recent project at Diamond Rock LLC. Tomas exceptional skills in development and their innovative approach have greatly impressed us. They have shown mastery in handling project-specific technologies and adapting to changes efficiently. Their commitment to quality, attention to detail, and clear communication were key to the project's success. I highly recommend Tomas for any future development projects and look forward to the opportunity to work with them again.",
    name: "Diamond Rock LLC",
    role: "Upwork client",
    project: "Video-sharing platform",
    rating: 5.0,
  },
  {
    quote:
      "Tomas helped me ship a groundbreaking AI benchmark covering front-end design. Once Tomas and I were able to get comfortable working with the team, he really came alive and was one of my most reliable and highest-quality teammates on the project. Tomas's work truly helped shape the future of how AI systems use the web, and I'm very grateful to have had his help!",
    name: "Shaun VanWeelden",
    role: "Upwork client",
    project: "AI benchmark platform",
    rating: 5.0,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials section__padding" id="testimonials">
      <div className="testimonials-heading">
        <p className="section-eyebrow">02 / CLIENT FEEDBACK</p>
        <h2>Working together.</h2>
        <p className="testimonials-description">
          A few words from people I've had the opportunity to work with.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <motion.article
            className="testimonial-card"
            key={`${item.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="testimonial-rating">
              <div
                className="testimonial-stars"
                aria-label={`${item.rating} out of 5 stars`}
              >
                {"★".repeat(Math.floor(item.rating))}
                {"☆".repeat(5 - Math.floor(item.rating))}
              </div>
              <span>{item.rating.toFixed(1)} / 5.0</span>
            </div>
            <span className="testimonial-quote-mark">“</span>

            <p className="testimonial-quote">{item.quote}</p>

            <div className="testimonial-footer">
              <div>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
                <span>{item.project}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <a
        className="testimonials-link"
        href="https://www.upwork.com/freelancers/~016e3e456f54dfa20f"
        target="_blank"
        rel="noopener noreferrer"
      >
        View my Upwork profile <FiArrowUpRight />
      </a>
    </section>
  );
};

export default Testimonials;
