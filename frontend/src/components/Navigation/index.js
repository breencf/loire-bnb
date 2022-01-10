import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {ProfileButton} from "./ProfileButton";

export const Navigation = ({isLoaded}) => {
  const sessionUser = useSelector((state) => state.session.user);

  let dropdownLinks;
  if (sessionUser) {
    dropdownLinks = (
      <>
        <li>
          <ProfileButton user={sessionUser} />
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </>
    );
  } else {
    dropdownLinks = (
      <>
        <li>
          <NavLink to="/signup">Sign up</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </>
    );
  }

  return (
    <nav>
      <ul>
        {isLoaded && dropdownLinks}
      </ul>
    </nav>
  );
};
