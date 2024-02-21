import { useEffect } from "react";
import { categoriesList } from "categoriesList/categoriesList";
import { BaseSyntheticEvent } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from 'store/activeCategory/actions';

import { selectActiveCategory } from 'store/activeCategory/selectors';
import { mainSelectList } from "../../store/mainFilms/selectors";
import { loadMainFilms } from "../../store/mainFilms/actions";
import prepareImage from "utils/prepareImage";

import routeFilmDetailPage from "../../pages/FilmDetailPage/routes";

import { NavLink } from "react-router-dom";

import './styles.scss';


const CategoryPageContent = () => {

    const dispatch = useDispatch()
    const moviesList = useSelector(mainSelectList);
    const activeCategory = useSelector(selectActiveCategory);

	useEffect(() => {
		dispatch(loadMainFilms(activeCategory));
        dispatch(setActiveCategory(activeCategory));
	}, [dispatch, activeCategory])

    const changeCategories = (event: BaseSyntheticEvent) => {
        dispatch(setActiveCategory(event.target.innerHTML));
    }

    return (
        <div className="container-category">
            <div className="category-title">
                <div className="btn-content">
                    {categoriesList.map((item, index) =>
                    <button key={index} onClick={changeCategories} className='btn-item'>{item}</button>)}
                </div>
            </div>
            <div className="category-main">
                {moviesList && moviesList.map((item) => (
                    <NavLink key={item.show.id} className="category" to={routeFilmDetailPage(item.show.id.toString())}>
                        <div className="category-image">
                            {prepareImage(item.show.image?.medium)}
                        </div>
                        <div className="category-text">
                            <p className="category-name">{item.show.name}</p>
                            <p>{item.show.genres.join(', ')}</p>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default CategoryPageContent;