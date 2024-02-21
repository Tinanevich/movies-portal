import { useEffect } from "react";

import { categoriesList } from "categoriesList/categoriesList";

import { useDispatch, useSelector } from "react-redux";
import { loadMainFilms } from "../../store/mainFilms/actions";
import { mainSelectList } from "../../store/mainFilms/selectors";
import { NavLink } from "react-router-dom";

import routeFilmDetailPage from "../../pages/FilmDetailPage/routes";
import prepareCountry from "../../utils/prepareCountry";
import prepareImage from "../../utils/prepareImage";
import leo from "../../assets/img/leo.jpg";

import './styles.scss';


const MainPageContent = () => {
    const categories = categoriesList[0];

    const dispatch = useDispatch();
	const mainFilmsList = useSelector(mainSelectList);

	useEffect(() => {
		dispatch(loadMainFilms(categories));
	}, [dispatch, categories]);

    return (
        <div className="container">
            <img className="img-head"src={leo} alt="leo"/>
            <p className="img-title">Самый популярный портал о фильмах</p>
        <div className="main-page">
            {mainFilmsList.slice(0,8).map((item) => (
                <NavLink className="film" key={item.show.id} to={routeFilmDetailPage(item.show.id.toString())}>
                {prepareImage(item.show.image?.medium)}
                    <div className="film-title">
                        <p className="name">{item.show.name}</p>
                        <p className="country">{prepareCountry(item.show.network?.country.name)}</p>
                        <p className="genres">{item.show.genres.join(', ')}</p>
                    </div>
            </NavLink>))}
        </div>
    </div>
    )
}

export default MainPageContent;