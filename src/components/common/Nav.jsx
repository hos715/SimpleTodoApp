import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
   return (
      <ul className="c-nav">
         <li>
            <NavLink
               to="/"
               className={`c-nav-item ${({ isActive }) => isActive? "active": ''}`}>
               کارها
            </NavLink>
         </li>
         <li>
            <NavLink
               to="/about"
               className={`c-nav-item ${({ isActive }) => isActive? "active": ''}`}>
               درباره من
            </NavLink>
         </li>
      </ul>
   );
}

export default Nav;