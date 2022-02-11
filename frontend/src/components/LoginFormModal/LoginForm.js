import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import "./LoginForm.css";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const sessionUser = useSelector((state) => state.sessions.user);
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(login({ credential, password })).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
      else history.push("/tastings")
    });
  };

  const onSubmitDemo = async (e) => {
    e.preventDefault();
    return dispatch(
      login({ credential: "didier@dagueneau.com", password: "password" })
    );
  };

  return (
    <div>
      <img
        width="100"
        height="100"
        src="https://res.cloudinary.com/jadecabbage/image/upload/v1642016960/loirebnb%20assets/icon-red_zjwezu.png"
        alt="loirebnb logo"
      />
      <h4>Login</h4>
      <form onSubmit={onSubmit}>
        <div>
          <ul>
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        </div>
        <div>
          <label htmlFor="credential">Email:</label>
          <input
            id="credential"
            type="text"
            onChange={(e) => setCredential(e.target.value)}
            value={credential}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <Link to="/signup">
          <h5>Click here to Signup</h5>
        </Link>
        <button className="submitButton" onClick={onSubmitDemo}>
          Demo User
        </button>
        <button type="submit" className="submitButton">
          Login
        </button>
      </form>
    </div>
  );
};
