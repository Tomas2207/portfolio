import React, { useEffect, useRef, useState } from 'react';
import loadingImg from '../assets/loading.png';
import emailjs from '@emailjs/browser';
import { SiUpwork } from 'react-icons/si';

const Contact = () => {
  const initialValues = { name: '', email: '', message: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Name is required';
    if (!values.email) errors.email = 'Email is required';
    if (!values.message) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setMessage(null);
    setErrors({ ...errors, [name]: null });
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setSubmit(true);
  };

  const sendMail = () => {
    if (Object.keys(errors).length === 0) {
      setLoading(true);

      // let databody = {
      //   name: formValues.name,
      //   email: formValues.email,
      //   message: formValues.message,
      // };

      // fetch(`https://portfolio-mail.onrender.com`, {
      //   method: 'POST',
      //   body: JSON.stringify(databody),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //     setFormValues(initialValues);
      //     setMessage(data);
      //     setLoading(false);
      //     setSubmit(false);
      //   });

      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            setFormValues(initialValues);
            setMessage('Message sent');
            setLoading(false);
            setSubmit(false);
          },
          (error) => {
            setSubmit(false);
            // show the user an error
          }
        );
    } else {
      setSubmit(false);
      console.log(errors);
    }
  };
  useEffect(() => {
    if (submit) sendMail();
  }, [submit]);

  return (
    <section className="contact section__padding" id="contact">
      <h2>Contact</h2>
      <div className="form-container">
        <div>
          <h3>Let's work together!</h3>
          <div className="social__media">
            <div className="social__media-img">
              <a href="https://github.com/Tomas2207" target="__blank">
                <img
                  src={process.env.PUBLIC_URL + '/icons/github.svg'}
                  alt=""
                />
              </a>
            </div>
            <div className="social__media-img">
              <a
                href="https://www.linkedin.com/in/tom%C3%A1s-abraham-869083216/"
                target="__blank"
              >
                <img
                  src={process.env.PUBLIC_URL + '/icons/linkedin.svg'}
                  alt=""
                />
              </a>
            </div>
            <div className="social__media-img">
              <a href="mailto: tomas.abraham@outlook.es">
                <img src={process.env.PUBLIC_URL + '/icons/email.svg'} alt="" />
              </a>
            </div>
            <div className="social__media-img upwork_fill">
              <a
                href="https://www.upwork.com/freelancers/~016e3e456f54dfa20f"
                target="__blank"
              >
                <SiUpwork fill="black" size={34} />
              </a>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors ? <p className="error">{errors.name}</p> : null}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors ? <p className="error">{errors.email}</p> : null}
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formValues.message}
            onChange={handleChange}
            cols="20"
            rows="6"
          ></textarea>
          {errors ? <p className="error">{errors.message}</p> : null}
          {loading ? (
            <button disabled>
              <img
                style={{ height: '100%' }}
                className="rotate-center"
                src={loadingImg}
                alt=""
              />
            </button>
          ) : (
            <button>Send</button>
          )}
          {message && <div className="message">{message}</div>}
        </form>
      </div>
      <br />
    </section>
  );
};

export default Contact;
