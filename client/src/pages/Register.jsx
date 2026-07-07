import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/api/auth/register";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });

        navigate("/login");
      }
      console.log(response);
    } catch (error) {
      console.log("Register Error", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/Register.png"
                  alt="registration"
                  width={"400"}
                  height={"500"}
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={user.username}
                      placeholder="Enter Username"
                      required
                      autoComplete="off"
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="Enter Email"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      value={user.phone}
                      onChange={handleInput}
                      placeholder="Enter Phone"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="Enter Password"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <br />
                  <button className="btn btn-submit" type="submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
