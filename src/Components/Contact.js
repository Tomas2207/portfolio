import React, { useEffect, useState } from 'react';
import loadingImg from '../assets/loading.png';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setSubmit(true);
  };

  const sendMail = () => {
    if (Object.keys(errors).length === 0) {
      setLoading(true);

      let databody = {
        name: formValues.name,
        email: formValues.email,
        message: formValues.message,
      };

      fetch(`https://portfolio-mail.onrender.com`, {
        method: 'POST',
        body: JSON.stringify(databody),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setFormValues(initialValues);
          setMessage(data);
          setLoading(false);
          setSubmit(false);
        });
    } else {
      setSubmit(false);
      console.log(errors);
    }
  };
  useEffect(() => {
    if (submit) sendMail();
  }, [submit]);

  return (
    <div className="contact section__padding" id="contact">
      <h2>Contact</h2>
      <div className="form-container">
        <h3>Let's work together!</h3>
        <form onSubmit={handleSubmit}>
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
            <div className="message">
              <img
                style={{ height: '100%' }}
                className="rotate-center"
                src={loadingImg}
                alt=""
              />
            </div>
          ) : (
            <button>Send</button>
          )}
          {message && <div className="message">{message}</div>}
        </form>
      </div>
      <br />
      <div className="social__media">
        <div className="social__media-img">
          <a href="https://github.com/Tomas2207" target="__blank">
            <img src={process.env.PUBLIC_URL + '/icons/github.svg'} alt="" />
          </a>
        </div>
        <div className="social__media-img">
          <a
            href="https://www.linkedin.com/in/tom%C3%A1s-abraham-869083216/"
            target="__blank"
          >
            <img src={process.env.PUBLIC_URL + '/icons/linkedin.svg'} alt="" />
          </a>
        </div>
        <div className="social__media-img">
          <a href="mailto: tomas.abraham@outlook.es">
            <img src={process.env.PUBLIC_URL + '/icons/email.svg'} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
