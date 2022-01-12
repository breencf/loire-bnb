import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import { SearchBar } from "./SearchBar/SearchBar";

export function Navigation({ isLoaded }) {
  // const sessionUser = useSelector((state) => state.sessions.user);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = <ProfileButton user={sessionUser} />;
  // } else {
  //   sessionLinks = (
  //     <>
  //       <LoginFormModal />
  //       <NavLink to="/signup">Sign Up</NavLink>
  //     </>
  //   );
  // }

  return (
    <div className="nav">
      <div id="navigation-top">
        <div className="navigation-left">
          <NavLink to="/"><h1>loirebnb</h1></NavLink>
        </div>
        <div className="navLinks-center">
          <NavLink exact to="/" className="NavLink">
            Explore Wineries
          </NavLink>
          <NavLink exact to="/api/wineries/create" className="NavLink">
            Hire this Developer
          </NavLink>
        </div>


        <div className="navLinks-right">
          <NavLink exact to="/api/wineries/create" className="NavLink">
            List your Winery
          </NavLink>
          {/* {isLoaded && sessionLinks} */}
          <ProfileButton isLoaded={isLoaded} />
        </div>
      </div>
      <div id="navigation-bottom">
        <SearchBar />
      </div>
    </div>
  );
}
