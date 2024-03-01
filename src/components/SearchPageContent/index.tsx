/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilms, loadMainFilms } from '../../store/mainFilms/actions';
import { mainSelectList } from "../../store/mainFilms/selectors";
import { NavLink } from "react-router-dom";
import { routes } from "../../config/routes";
import search from '../../assets/img/search.png';
import { prepareImageUrl } from '../../utils/utils';

import './styles.scss';


const SearchPageContent = () => {

    const dispatch = useDispatch();
    const mainFilmsList = useSelector(mainSelectList);
    const [searchValue, setValue] = useState('');
    const inputPlaceholder = 'Введите категорию фильма на английском языке'

    useEffect(() => {
        dispatch(clearFilms())
    },[])

    const enterKeyCode = 13;
    const checkKey = (e: any) => e.keyCode === enterKeyCode ? sendRequest() : setValue(e.target.value)

    const sendRequest = () => {
        dispatch(loadMainFilms(searchValue));
    }

    const noDataMessage = mainFilmsList
        ? 'Ничего не найдено, сформулируйте запрос иначе'
        : 'Введите категорию фильма на английском языке';


    return (
        <div className='containerSearch'>
            <p className='searchTitle'>Поиск по категории</p>
            <div className='searchWrapper'>
                <img src={search} alt="search" className='searchIcon' onClick={sendRequest}/>
                <input type='text' className='inputCategories' placeholder={inputPlaceholder} onKeyUp={checkKey}></input>
            </div>
            <div className='resultTitle'>Результаты поиска:</div>
            <div className='categorianWrapper'>
                {mainFilmsList.length > 0
                ? mainFilmsList.map((item) => (
                        <NavLink key={item.show.id} className="category" to={routes.filmDetailPage(item.show.id.toString())}>
                            <div className="category-image">
                                <img className="film-image" src={prepareImageUrl(item.show.image?.medium)} alt="film"/>
                            </div>
                            <div className="category-text">
                                <p className="category-name">{item.show.name}</p>
                                <p>{item.show.genres.join(', ')}</p>
                            </div>
                        </NavLink>
                        ))
                    : <p className='searchMessage'>{noDataMessage}</p>
                }
            </div>
        </div>
  );

}

export default SearchPageContent;