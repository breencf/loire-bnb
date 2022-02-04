import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import LoginFormModal from "../LoginFormModal";

function ProfileButton({ user, isLoaded }) {
  const history = useHistory()
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector((state) => state.sessions.user);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
    closeMenu();
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <li>
          {sessionUser.firstName} {sessionUser.lastName}
        </li>
        <li>{sessionUser.email}</li>
        <hr />
        <li>
          <NavLink to="/tastings" className="NavLink">Tastings</NavLink>
        </li>
        <li>
          <NavLink to="/mywineries" className="NavLink">My Wineries</NavLink>
        </li>
        <li>
          <NavLink to="/savedwineries" className="NavLink">My Saved Wineries</NavLink>
        </li>

        <hr />
        <li>
          <button onClick={logout} className="loginlogout">
            Log Out
          </button>
        </li>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <li><NavLink to="/wineries/create">Host your winery</NavLink></li>
        <hr/>

        <li>
          <LoginFormModal />
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </>
    );
  }

  const openMenu = () => {
    if (showMenu) return;
    console.log('openMenu onclick')
    setShowMenu(true);
  };

  const closeMenu = () => {
    console.log('closeMenut onclick')
    setShowMenu(false);
  };

  // useEffect(() => {
  //   if (!showMenu) return;

  //   // document.addEventListener('click', closeMenu);

  //   // return () => document.removeEventListener("click", closeMenu);
  // }, [showMenu]);

  return (
    <>
      <button id="user-button" onClick={openMenu}>
        <div id="bars">
          <i className="fas fa-bars"></i>
        </div>
        <div id="user-circle">
          <i className="fas fa-user-circle" />
        </div>
      </button>
      {showMenu && (
        <>
          <div className="profile-button-background" onClick={closeMenu}></div>
          <ul className="profile-dropdown">{isLoaded && sessionLinks}</ul>
        </>
      )}
    </>
  );
}

export default ProfileButton;
/*manipulate color + font-size of this div^^ */
