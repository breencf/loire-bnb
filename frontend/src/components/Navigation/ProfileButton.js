import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';
import LoginFormModal from "../LoginFormModal";


function ProfileButton({ user, isLoaded }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector((state) => state.sessions.user);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu()
  };


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <li>{sessionUser.firstName} {sessionUser.lastName}</li>
      <li>{sessionUser.email}</li>
      <li><NavLink to="/tastings">Tastings</NavLink></li>
      <li><NavLink to="/mywineries">My Wineries</NavLink></li>
      <li><button onClick={logout}>Log Out</button></li>

      </>
    )
  } else {
    sessionLinks = (
      <>
        <p>Host your winery</p>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (!showMenu) return;



    // document.addEventListener('click', closeMenu);

    // return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  return (
    <>
      <button id="user-button" onClick={openMenu}>

        <div id="bars"><i className="fas fa-bars"></i></div>
        <div id="user-circle"><i className="fas fa-user-circle" /></div>
      </button>
      {showMenu &&  (
        <>
        <div className="profile-button-background" onClick={closeMenu}></div>
        <ul className="profile-dropdown">
          {isLoaded && sessionLinks}
        </ul>
        </>
      )}
    </>
  );
}

export default ProfileButton;
/*manipulate color + font-size of this div^^ */
