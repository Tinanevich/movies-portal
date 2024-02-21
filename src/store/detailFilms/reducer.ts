import { AnyAction } from "redux"

import { IStore } from "./types";

const initialState = {
	list: [],
}

const detailFilmReducer = (state : IStore = initialState, action : AnyAction) => {
	switch (action.type) {
		case 'show/setDetail' :
			return {...state, list: [...action.payload]}
		default:
			return state
	}
}

export default detailFilmReducer;