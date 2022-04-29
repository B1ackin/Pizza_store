

const initialState = {
    items: [],
    isLoaded: false
}

export const pizzasReducer = (state = initialState, action: any) => {
    if(action.type === "SET_PIZZAS") {
        return {
            ...state,
            items: action.payload
        }
    }
    return state
}