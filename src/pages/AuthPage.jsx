import { useState, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";
import "../scss/Login.scss";
import routes from "../Routes";
import axios from "axios";

const Login = () => {
  const effect = () => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  };

  useEffect(() => effect());

  const [telefone, setTelefone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(true);
  const [state, setState] = useState(true);

  let cancelation = axios.CancelToken.source();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response = await axios.post(
        `${routes.baseUrl}/login`,
        {
          username: username,
          password: password,
        },
        { cancelToken: cancelation.token }
      );
    } catch (e) {
      setValid(false);
      console.error(e);
      setPassword("");
    }
    setLoading(false);
  };
  const signInUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      let response = await axios.post(
        `${routes.baseUrl}/register`,
        {
          username: username,
          password: password,
          telefone: telefone,
        },
        { cancelToken: cancelation.token }
      );
    } catch (e) {
      setValid(false);
      console.error(e);
      setPassword("");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={(e) => signIn(e)}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn solid">
              {loading ? "Loading..." : "Login"}
            </button>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <Link to="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-google"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </form>
          <form
            action="#"
            className="sign-up-form"
            onSubmit={(e) => signInUp(e)}
          >
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-mobile-alt"></i>
              <input
                type="text"
                placeholder="No.Telp"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn solid">
              {loading ? "Loading..." : "Sign Up"}
            </button>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <Link to="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-google"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          {/* <img src="log.svg" className="image" alt="img" /> */}
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          {/* <img src="register.svg" className="image" alt="img" /> */}
        </div>
      </div>
    </div>
  );
};
export default Login;
