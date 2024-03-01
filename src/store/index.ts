import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import mainFilmsReducer from "./mainFilms/reducer";
import detailFilmReducer from './detailFilms/reducer';
import activeCategoryReducer  from './activeCategory/reducer';

const rootReducer = combineReducers({
    detailFilmReducer,
    mainFilmsReducer,
    activeCategoryReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;