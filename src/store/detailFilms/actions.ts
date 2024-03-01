import { Dispatch } from "redux"
import getDetailFilms from "../../services/getDetailFilms"

import { IDetail } from "../../types/IDetail"

export const setDetail = (payload: {show: IDetail}) => {
	return {
		type: 'film/setDetail',
		payload,
	}
}

export const loadDetail: any = (id: string) => async (dispatch : Dispatch) => {
	try {
		const {data} = await getDetailFilms(id)
		dispatch(setDetail(data))
	} catch(e) {
		console.log('Произошла ошибка', e)
	}
}