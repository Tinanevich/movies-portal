/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { detailSelectList } from "../../store/detailFilms/selectors";

import { ID } from "../../types/ID";
import { loadDetail } from "../../store/detailFilms/actions";

import { prepareImageUrl } from "../../utils/utils";
import { prepareSummary } from "../../utils/utils";
import star from '../../assets/img/star.png';

import './styles.scss';


const DetailPageContent = () => {

    const { id } = useParams<ID>()
	const dispatch = useDispatch()
	const filmDetail = useSelector(detailSelectList)

	useEffect(() => {
		dispatch(loadDetail(id))
	}, [id])

    return (
        <div className="detailPageContent">
            {filmDetail.id ? (
                <div className="film-detail">
                    <img className="film-image" src={prepareImageUrl(filmDetail.image?.medium)} alt="film"/>
                    <div className="film_info">
                        <div className="detail-head">
                            <div className="film-name">{filmDetail.name}</div>
                            <div className="rating">
                                <img className="star" src={star} alt="star" />
                                <span>{(filmDetail.rating.average) ? (filmDetail.rating.average + "/10") : "unknown"}</span>
                            </div>
                        </div>
                        <ul className="detail-content">
                            <li className="content-key">Год выхода: <span className="content-value">{filmDetail.ended && filmDetail.ended.slice(0, 4)}</span></li>
                            <li className="content-key">Страна: <span className="content-value">{(filmDetail.network?.country.name) ? (filmDetail.network?.country.name) : 'unknown'}</span></li>
                            <li className="content-key">Жанр: <span className="content-value">{filmDetail.genres.join(', ')}</span></li>
                            <li className="content-key">Описание: <span className="content-value" dangerouslySetInnerHTML= {prepareSummary(filmDetail.summary)}></span></li>
                        </ul>
                    </div>
                </div>
            ) : ('Загрузка')}
        </div>
    )
}

export default DetailPageContent;