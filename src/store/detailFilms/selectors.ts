import { IDetailStore } from "./types";

export const detailSelectList = (state : IDetailStore) => state.detailFilmReducer.list;