import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./sign.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To track error messages
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred. Please try again."); // Display an error message
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="blur-overlay">
          <img src="./images/home_image.png" />
        </div>
        <div className=" p-4 rounded w-50 shadow bg-light">
          <h2 className="text-center">Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 rounded-0">
              Login
            </button>
          </form>
          <p className="mt-3 text-center">Don't have an account?</p>
          <Link
            to="/register"
            className="btn btn-secondary w-100 rounded-0 text-decoration-none"
          >
            Signup
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
