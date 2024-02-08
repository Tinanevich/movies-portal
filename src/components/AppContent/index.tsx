import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage, {routeMain as routeMainPage} from '../../pages/MainPage';
import CategoryPage, {routeMain as routeCategoryPage} from '../../pages/CategoryPage';
import FilmDetailPage, {routeMain as routeFilmDetailPage} from '../../pages/FilmDetailPage';
import InfoPage, {routeMain as routeInfoPage} from '../../pages/InfoPage';

import Header from '../Header';
import Footer from '../Footer';

import './styles.scss';

const AppContent = () => {
    return (
      <div className="mainWrapper">
        <Header />
        <main>
            <Switch>
                <Route exact path={routeMainPage()} component={MainPage}/>
                <Route exact path={routeCategoryPage()} component={CategoryPage}/>
                <Route exact path={routeFilmDetailPage()} component={FilmDetailPage}/>
                <Route exact path={routeInfoPage()} component={InfoPage}/>
                <Redirect to={{pathname: routeMainPage()}}/>
            </Switch>
        </main>
        <Footer />
      </div>
    );
  }

  export default AppContent;