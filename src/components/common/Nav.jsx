import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
   return (
      <ul className="c-nav">
         <li>
            <NavLink
               to="/"
               className="c-nav-item" exact
               activeClassName="is-active">
               کارها
            </NavLink>
         </li>
         <li>
            <NavLink
               to="/about"
               className="c-nav-item"
               activeClassName="is-active">
               درباره من
            </NavLink>
         </li>
      </ul>
   );
}

export default Nav;