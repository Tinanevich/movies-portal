import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import CategoryPage from '../../pages/CategoryPage';
import FilmDetailPage from '../../pages/FilmDetailPage';
import InfoPage from '../../pages/InfoPage';
import SearchPage from '../../pages/SearchPage';
import { routes } from '../../config/routes';

import Header from '../Header';
import Footer from '../Footer';

import './styles.scss';


const AppContent = () => {
    return (
      <>
        <Header />
        <main>
            <Switch>
                <Route exact path={routes.mainPage()} component={MainPage}/>
                <Route exact path={routes.categoryPage()} component={CategoryPage}/>
                <Route exact path={routes.filmDetailPage()} component={FilmDetailPage}/>
                <Route exact path={routes.infoPage()} component={InfoPage}/>
                <Route exact path={routes.searchPage()} component={SearchPage}/>
                <Redirect to={{pathname: routes.mainPage()}}/>
            </Switch>
        </main>
        <Footer />
      </>
    );
  }

  export default AppContent;