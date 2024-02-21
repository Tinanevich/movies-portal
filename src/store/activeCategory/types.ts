export interface IActiveCategoryAction {
    type: string,
    payload: string
}

export interface IActiveCategoryStore {
    activeCategoryReducer: {
        activeCategory: string
    }
}

