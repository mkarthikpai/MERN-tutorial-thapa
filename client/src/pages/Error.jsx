import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <section id="error-page">
      <div className=" content">
        <h2 className="header">404</h2>
        <h4 className="notfound-message">Sorry! Page not found</h4>
        <p className="notfound-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          incidunt numquam aut blanditiis? Maxime inventore quod quasi dicta cum
          placeat dolorem impedit est nisi saepe.
        </p>
        <div className="btn btn-group">
          <NavLink to={"/"}>
            <button className="btn">Return Home</button>
          </NavLink>
          {/* <NavLink to={"/contact"}>
            <button className="btn">Report Problem</button>
          </NavLink> */}
        </div>
      </div>
    </section>
  );
};

export default Error;
