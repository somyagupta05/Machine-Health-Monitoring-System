import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To track error messages
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login"); // Redirect to login page after successful signup
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred. Please try again."); // Display an error message
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Register</h2>
          {error && <div className="alert alert-danger">{error}</div>}{" "}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="name"
                className="form-control rounded-0"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
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
              <label htmlFor="password">
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
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Register
            </button>
          </form>
          <p>Already have an account?</p>
          <Link
            to="/login"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
