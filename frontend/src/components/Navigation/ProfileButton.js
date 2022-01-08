import React, { useState, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

export const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const lout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <button onClick={openMenu}>
        <i className="fas fa-user-circle"></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={lout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
};
/*manipulate color + font-size of this div^^ */
