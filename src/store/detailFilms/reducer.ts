import { IDetailAction} from "./types";

const initialState = {
	list: {},
}

const detailFilmReducer = (state = initialState, action : IDetailAction) => {
	switch (action.type) {
		case 'film/setDetail':
			return {...state, list: {...action.payload}}
		default:
			return state
	}
}

export default detailFilmReducer;