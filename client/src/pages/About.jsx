const About = () => {
  return (
    <>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>Welcome, Karthik</p>
            <h1>Why choose us ?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              pariatur ipsum voluptates iste, dolorum omnis! Voluptas eos,
              exercitationem optio architecto totam aperiam non quaerat earum
              sapiente ipsam error quidem velit inventore nulla.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">Learn more</button>
              </a>
            </div>
          </div>
          {/* hero image  */}
          <div className="hero-image">
            <img
              src="/images/Coding.png"
              alt="coding together"
              width={"400"}
              height={"500"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
