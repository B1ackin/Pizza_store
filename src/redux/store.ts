import {combineReducers, createStore} from "redux";
import {filterReducer} from "./reducers/filter";
import {pizzasReducer} from "./reducers/pizzas";

export const rootReducer = combineReducers({
    filter: filterReducer,
    pizza: pizzasReducer
})


const store = createStore(rootReducer)


export default store