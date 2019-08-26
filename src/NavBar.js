import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
      <li><NavLink to="/">Calls</NavLink></li>
      <li><NavLink to="/orgs">Orgs</NavLink></li>
       </ul>

      <ul className="nav-right">
      {localStorage.token ? (<li><NavLink to="/profile">Profile</NavLink></li>) : (<li><NavLink to="/login">Login</NavLink></li>)}
      {localStorage.token ? (<li><NavLink to="/signout">Signout</NavLink></li>) : (<li><NavLink to="/signup">Signup</NavLink></li>)}
      </ul>
   
   </div>
  );
};

export default NavBar;