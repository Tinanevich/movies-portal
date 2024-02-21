import { NavLink } from 'react-router-dom';

import {routeMain as routeMainPage} from '../../pages/MainPage';
import {routeMain as routeCategoryPage} from '../../pages/CategoryPage';
import {routeMain as routeInfoPage} from '../../pages/InfoPage';
import {routeMain as routeSearchPage} from '../../pages/SearchPage';
import movie from '../../assets/img/movie.png';

import './styles.scss'

const Header = () => {
    return (
      <header className="mainHeader">
        <NavLink className="title" to={routeMainPage()}>
          <img className='logo' src={movie} alt={movie} /></NavLink>
        <nav>
            <NavLink to={routeMainPage()} activeClassName={'linkActive'}>
              Главная
            </NavLink>
            <NavLink to={routeCategoryPage()} activeClassName={'linkActive'}>
              Фильмы по категории
            </NavLink>
            <NavLink to={routeInfoPage()} activeClassName={'linkActive'}>
              О нас
            </NavLink>
            <NavLink to={routeSearchPage()} activeClassName={'linkActive'}>
              Поиск
            </NavLink>
        </nav>
      </header>
    );
  }

  export default Header;