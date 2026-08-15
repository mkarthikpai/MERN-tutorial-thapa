import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth();
  console.log("Karthik", services);
  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>
      <div className="container services-grid grid-three-cols">
        {services.map((curElem, index) => {
          const { price, description, provider, service } = curElem;
          return (
            <div key={index} className="card">
              <div className="card-img">
                <img src="/images/Coding.png" alt="service info" width={300} />
              </div>

              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p className="card-description">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
