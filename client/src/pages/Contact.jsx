import { useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/Register.png" alt="contact us" />
          </div>

          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                {" "}
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={contact.username}
                  onChange={handleInput}
                  placeholder="Enter Username"
                  required
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={contact.email}
                  onChange={handleInput}
                  placeholder="Enter Email"
                  required
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  cols={"30"}
                  rows={"6"}
                  value={contact.message}
                  onChange={handleInput}
                  placeholder="Enter Message"
                  autoComplete="off"
                  required
                ></textarea>
              </div>
              <button className="btn btn-submit" type="submit">
                Submit
              </button>
            </form>
          </section>
        </div>
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.566443809522!2d74.84019297489118!3d12.871255687435001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4e858a8517%3A0xcfa2fb1fe25e0164!2sCity%20Centre!5e0!3m2!1sen!2sin!4v1783344762347!5m2!1sen!2sin"
            width={"100%"}
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </section>
      </section>
    </>
  );
};

export default Contact;
