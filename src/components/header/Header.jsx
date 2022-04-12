import React from 'react';
import './header.sass'
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/applications' >Входящие завки</Link>
          </li>
          <li>
            <Link to='/finished-applications' >Выполненные завки</Link>
          </li>
          <li>
            <Link to='/profile' >Мой профиль</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
