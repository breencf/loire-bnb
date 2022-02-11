import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import * as sessionActions from "../../store/session";
import LoginFormModal from "../LoginFormModal";

function ProfileButton({ user }) {
  const history = useHistory();
  const location = useLocation()
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector((state) => state.sessions.user);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
    closeMenu();
  };

  useEffect(() => {
    if(showMenu) setShowMenu(false)
  },[location])

  let sessionLinks;
  if (sessionUser) {

    sessionLinks = (
      <>
        <li key="name">
          {sessionUser.firstName} {sessionUser.lastName}
        </li>
        <li key="email">{sessionUser.email}</li>
        <hr />
        <li key="tastings">
          <NavLink to="/tastings" className="NavLink">
            Tastings
          </NavLink>
        </li>
        <li key="mywineries">
          <NavLink to="/mywineries" className="NavLink">
            My Wineries
          </NavLink>
        </li>
        <li key="savedwineries">
          <NavLink to="/savedwineries" className="NavLink">
            My Saved Wineries
          </NavLink>
        </li>

        <hr />
        <li key="logout">
          <button onClick={logout} className="loginlogout">
            Log Out
          </button>
        </li>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <li key="create">
          <NavLink to="/wineries/create">Host your winery</NavLink>
        </li>
        <hr />

        <li key="login">
          <LoginFormModal />
        </li>
        <li key="signup">
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
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
          <ul className="profile-dropdown">
            {sessionLinks}
          </ul>
        </>
      )}
    </>
  );
}

export default ProfileButton;
/*manipulate color + font-size of this div^^ */
