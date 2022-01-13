import React from "react";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { SearchBar } from "./SearchBar/SearchBar";

export function Navigation({ isLoaded }) {



  return (
    <div className="nav-black" >
      <div id="navigation-top">
        <div className="navigation-left">
          <NavLink to="/"><img alt="logo"  height="50"src="https://res.cloudinary.com/jadecabbage/image/upload/v1642016960/icon-logo_tekkvp.png"/></NavLink>
        </div>
        <div className="navLinks-center">
          <NavLink exact to="/wineries" className="NavLink">
            Explore Wineries
          </NavLink>
          <NavLink exact to="/" className="NavLink">
            About Loirebnb
          </NavLink>
        </div>


        <div className="navLinks-right">
          <NavLink exact to="/wineries/create" className="NavLink">
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
