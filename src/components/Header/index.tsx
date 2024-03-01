import React from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../../config/routes';
import movie from '../../assets/img/movie.png';

import './styles.scss';

const Header = () => {
    return (
      <header className="mainHeader">
        <NavLink className="title" to={routes.mainPage()}>
          <img className="logo" src={movie} alt={movie} /></NavLink>
          <nav className="content">
              <NavLink className="content-page" to={routes.mainPage()} activeClassName={'linkActive'}>
                Главная
              </NavLink>
              <NavLink className="content-page" to={routes.categoryPage()} activeClassName={'linkActive'}>
                Фильмы по категории
              </NavLink>
              <NavLink className="content-page" to={routes.infoPage()} activeClassName={'linkActive'}>
                О нас
              </NavLink>
              <NavLink className="content-page" to={routes.searchPage()} activeClassName={'linkActive'}>
                Поиск
              </NavLink>
          </nav>
      </header>
    );
  }

  export default Header;