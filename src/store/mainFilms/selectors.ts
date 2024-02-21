import { IStore } from "./types";

export const mainSelectList = (state: {mainFilmsReducer: IStore}): IStore['list'] => state.mainFilmsReducer.list;
