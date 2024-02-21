import { IActiveCategoryStore } from "./types";

export const selectActiveCategory = (state: IActiveCategoryStore) => state.activeCategoryReducer.activeCategory;