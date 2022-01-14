import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { SearchBar } from "./SearchBar/SearchBar";

export function Navigation({ isLoaded }) {
  const [bigBlackNav, setbigBlackNav] = useState(true);

  //scrollY 150px/154px

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      setbigBlackNav(false);
    } else setbigBlackNav(true);
  });

  return (
    <div className={bigBlackNav ? "nav-black" : "nav-white"}>
      <div id="navigation-top">
        <div className="navigation-left">
          <Link to="/">
            <img
              alt="logo"
              height="50"
              src="https://res.cloudinary.com/jadecabbage/image/upload/v1642016960/icon-logo_tekkvp.png"
            />
          </Link>
        </div>
        <div className="navLinks-center">
          <Link exact to="/wineries" className="NavLink">
            Explore Wineries
          </Link>
          <Link exact to="/" className="NavLink">
            About Loirebnb
          </Link>
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
