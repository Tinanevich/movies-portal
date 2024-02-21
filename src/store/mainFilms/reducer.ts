import { AnyAction } from "redux";
import { IStore } from "./types";

const initialState = {
    list: []
}

const mainFilmsReducer = (state: IStore = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'films/setFilms' :
            return {...state, list: [...action.payload]}
        default:
            return state
    }
}


export default mainFilmsReducer;
