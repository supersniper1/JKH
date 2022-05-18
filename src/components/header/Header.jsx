import React from 'react';
import './header.sass'
import {NavLink} from "react-router-dom";

export const Header = () => {
  return (
    <header className='headerFixed'>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/applications"
              className={({ isActive }) =>
                isActive ? 'activeLink' : 'inactiveLink'
              }
            >
              Входящие заявки
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/finished-applications"
              className={({ isActive }) =>
                isActive ? 'activeLink' : 'inactiveLink'
              }
            >
              Выполненные заявки
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? 'activeLink' : 'inactiveLink'
              }
            >
              Мой профиль
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
