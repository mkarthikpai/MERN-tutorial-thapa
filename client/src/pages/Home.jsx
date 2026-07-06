const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are worlds best company</p>
              <h1>Welcome to Karthik Infotech</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia pariatur ipsum voluptates iste, dolorum omnis! Voluptas
                eos, exercitationem optio architecto totam aperiam non quaerat
                earum sapiente ipsam error quidem velit inventore nulla.
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
      </main>

      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
          </div>
          <div className="div1">
            <h2>100,000+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well Known Developers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Service</p>
          </div>
        </div>
      </section>

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero image  */}
          <div className="hero-image">
            <img
              src="/images/Coding.png"
              alt="coding together"
              width={"400"}
              height={"500"}
            />
          </div>
          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started</h1>
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
        </div>
      </section>
    </>
  );
};

export default Home;
