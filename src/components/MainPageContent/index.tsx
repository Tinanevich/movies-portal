/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";

import { categoriesList } from "../../constants";

import { useDispatch, useSelector } from "react-redux";
import { loadMainFilms } from "../../store/mainFilms/actions";
import { mainSelectList } from "../../store/mainFilms/selectors";
import { NavLink } from "react-router-dom";

import { routes } from "../../config/routes";
import { prepareImageUrl } from "../../utils/utils";

import leo from "../../assets/img/leo.jpg";

import './styles.scss';


const MainPageContent = () => {
    const categories = categoriesList[0];

    const dispatch = useDispatch();
	const mainFilmsList = useSelector(mainSelectList);

	useEffect(() => {
		dispatch(loadMainFilms(categories));
	}, [categories]);

    return (
        <div className="main">
            <div className="image-content">
                <img className="img-head"src={leo} alt="leo"/>
                <p className="img-title">Самый популярный портал о фильмах</p>
            </div>
            <div className="main-page">
                {mainFilmsList.slice(0,8).map((item) => (
                    <NavLink className="film" key={item.show.id} to={routes.filmDetailPage(item.show.id.toString())}>
                        <img className="film-image" src={prepareImageUrl(item.show.image?.medium)} alt="film"/>
                        <div className="film-title">
                            <p className="name">{item.show.name}</p>
                            <p className="country">{(item.show.network?.country.name) ? (item.show.network?.country.name) : "unknown"}</p>
                            <p className="genres">{item.show.genres.join(', ')}</p>
                        </div>
                </NavLink>))}
            </div>
    </div>
    )
}

export default MainPageContent;