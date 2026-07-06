import { NavLink } from "react-router-dom";
import Analytics from "../components/Analytics";

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
                <NavLink to="/contact">
                  <button className="btn">Connect now</button>
                </NavLink>
                <NavLink to="/services">
                  <button className="btn secondary-btn">Learn more</button>
                </NavLink>
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
      <Analytics />
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
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              pariatur ipsum voluptates iste, dolorum omnis! Voluptas eos,
              exercitationem optio architecto totam aperiam non quaerat earum
              sapiente ipsam error quidem velit inventore nulla.
            </p>
            <div className="btn btn-group">
              <NavLink href="/contact">
                <button className="btn">Connect now</button>
              </NavLink>
              <NavLink href="/services">
                <button className="btn secondary-btn">Learn more</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
