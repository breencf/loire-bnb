import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import react, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";

export const LoginFormPage = () => {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const sessionUser = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <ul>
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        </div>
        <div>
          <label htmlFor="credential">Username/Email:</label>
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
        <button>Submit</button>
      </form>
    </div>
  );
};
