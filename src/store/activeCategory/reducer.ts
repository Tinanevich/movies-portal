import { IActiveCategoryAction } from "./types";

const initialState = {
    activeCategory: 'Animals'
}


const activeCategoryReducer = (state = initialState, action: IActiveCategoryAction) => {
    switch (action.type) {
        case 'activeCategory/setActiveCategory': {
            return {...state, activeCategory: action.payload};
        }
    default:
        return state;
    }
}

export default activeCategoryReducer;

