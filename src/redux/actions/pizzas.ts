import axios from "axios";
import {Dispatch} from "redux";



export const fetchPizzas = () => (dispatch: Dispatch) => {
    axios.get("http://localhost:3002/pizzas")
        .then(({data}) => {
            dispatch(setPizzas(data))
        })
}


export const setPizzas = (items: []) => ({
    type: 'SET_PIZZAS',
    payload: items
})