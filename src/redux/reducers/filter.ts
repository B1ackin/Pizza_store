
const initialState = {
    category: 0,
    sortBy: 'popular'
}

export const filterReducer = (state = initialState, action: any) => {
    if(action.type === "SET_SORT_BY") {
        return {
            ...state,
            sortBy: action.sortBy
        }
    }
    return state
}