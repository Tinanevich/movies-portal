import { IStore } from "./types"

export const detailSelectList = (state : { detailFilmReducer : IStore}) : IStore['list'] => state.detailFilmReducer.list;


