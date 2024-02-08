import { NavLink } from 'react-router-dom';

import {routeMain as routeMainPage} from '../../pages/MainPage';
import {routeMain as routeCategoryPage} from '../../pages/CategoryPage';
import {routeMain as routeInfoPage} from '../../pages/InfoPage';

import './styles.scss'

const Header = () => {
    return (
      <div className="mainHeader">
      <NavLink className="title" to={routeMainPage()}>MOVIESInfo</NavLink>
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
       </nav>
      </div>
    );
  }

  export default Header;