import { Dispatch } from "redux";
import getMainFilms from "../../services/getMainFilms";
import { IStore } from "./types";


export const setFilmsAction = (list: IStore['list']) => {
	return {
		type: 'films/setFilms',
		payload: list,
	}
}
export const clearFilms = () => {
    return {
        type: 'films/clearFilms',
    }
}

export const loadMainFilms: any = (category: string) => async (dispatсh: Dispatch) => {
	try {
		const response = await getMainFilms(category)
		dispatсh(setFilmsAction(response.data))

	} catch (e) {
		console.log(e, 'произошла ошибка')
	}
}