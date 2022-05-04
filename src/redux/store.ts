import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {filterReducer} from "./reducers/filter";
import {pizzasReducer} from "./reducers/pizzas";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    filters: filterReducer,
    pizzas: pizzasReducer,
})


export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))


export default store