import { IDetail } from "../../types/IDetail";


export interface IDetailAction {
    type: string,
    payload: IDetail
}

export interface IDetailStore {
    detailFilmReducer: {
        list: IDetail
    }
}