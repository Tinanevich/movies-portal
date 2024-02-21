import { Dispatch } from "redux"
import getDetailFilms from "../../services/getDetailFilms"

import { IStore } from "./types"

export const setDetail = (list : IStore['list']) => {
	return {
		type: 'show/setDetail',
		payload: list,
	}
}

export const loadDetail: any = (id: string) => async (dispatch : Dispatch) => {
	try {
		const responseArray = []
		const response = await getDetailFilms(id)
		responseArray[0] = response.data
		dispatch(setDetail(responseArray))
	} catch(e) {
		console.log('Произошла ошибка', e)
	}
}