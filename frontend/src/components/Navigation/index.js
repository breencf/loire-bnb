import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ProfileButton } from "./ProfileButton";
import {LoginFormModal} from "../LoginFormModal";
import "./Navigation.css";

export const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let dropdownLinks;
  if (sessionUser) {
    dropdownLinks = <ProfileButton user={sessionUser} />;
  } else {
    dropdownLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
        {isLoaded && dropdownLinks}
      </li>
    </ul>
  );
};
