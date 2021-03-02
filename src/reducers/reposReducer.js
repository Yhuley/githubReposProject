import {initialState} from "./initialState"
import {SET_CURRENT_PAGE, SET_IS_FETCH_ERROR, SET_IS_FETCHING, SET_REPOS} from "./actions";

const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items,
                isFetching: false,
                totalCount: action.payload.total_count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_IS_FETCH_ERROR:
            return {
                ...state,
                isFetchError: action.payload.bool,
                errorMessage: action.payload.error
            }
        default:
            return state
    }
}

export default reposReducer