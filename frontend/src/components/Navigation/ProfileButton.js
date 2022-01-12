import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';
import LoginFormModal from "../LoginFormModal";


function ProfileButton({ user, isLoaded }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector((state) => state.sessions.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <li>{user.firstName} {user.lastName}</li>
      <li>{user.email}</li>
      <li><NavLink to="/tastings">Tastings</NavLink></li>x
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

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button id="user-button" onClick={openMenu}>

        <div id="bars"><i className="fas fa-bars"></i></div>
        <div id="user-circle"><i className="fas fa-user-circle" /></div>
      </button>
      {showMenu &&  (
        <ul className="profile-dropdown">
          {isLoaded && sessionLinks}
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
/*manipulate color + font-size of this div^^ */
