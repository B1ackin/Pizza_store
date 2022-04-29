import {combineReducers, createStore} from "redux";
import {filterReducer} from "./reducers/filter";
import {pizzasReducer} from "./reducers/pizzas";

export const rootReducer = combineReducers({
    filters: filterReducer,
    pizzas: pizzasReducer,
})

export const store = createStore(rootReducer)


export default store