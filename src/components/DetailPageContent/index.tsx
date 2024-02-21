import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { detailSelectList } from "../../store/detailFilms/selectors";

import { ID } from "../../types/ID";
import { loadDetail } from "../../store/detailFilms/actions";

import prepareDate from "../../utils/prepareDate";
import prepareCountry from "../../utils/prepareCountry";
import prepareSummary from "../../utils/prepareSummary";
import prepareRating from "../../utils/prepareRating";
import prepareImage from "../../utils/prepareImage";
import Star from '../../assets/img/star.png';

import './styles.scss';

const DetailPageContent = () => {

    const { id } = useParams<ID>()
	const dispatch = useDispatch()
	const showDetail = useSelector(detailSelectList)

	useEffect(() => {
		dispatch(loadDetail(id))
	}, [id, dispatch])
    console.log(showDetail)

    return (
        <div className="wrapper">
            {showDetail.length > 0 ? (
                <div className="film-detail">
                    {prepareImage(showDetail[0].image?.medium)}
                    <div className="film_info">
                        <div className="detail-head">
                            <div className="film-name">{showDetail[0].name}</div>
                            <div className="rating">
                                <img className="star" src={Star} alt="star" />
                                <span>{prepareRating(showDetail[0].rating.average)}</span>
                            </div>
                        </div>
                        <ul className="detail-content">
                            <li className="content-key">Год выхода: <span className="content-value">{prepareDate(showDetail[0].ended)}</span></li>
                            <li className="content-key">Страна: <span className="content-value">{prepareCountry(showDetail[0].network?.country.name)}</span></li>
                            <li className="content-key">Жанр: <span className="content-value">{showDetail[0].genres.join(', ')}</span></li>
                            <li className="content-key">Описание: <span className="content-value">{prepareSummary(showDetail[0].summary)}</span></li>
                        </ul>
                    </div>
                </div>
            ) : ('Загрузка')}
        </div>
    )
}

export default DetailPageContent;