import {initialState} from "./initialState"
import {SET_CURRENT_PAGE, SET_IS_FETCH_ERROR, SET_IS_FETCHING} from "./generalActions";

const GET_USERS = "GET_USERS"

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                items: action.payload.items,
                isFetching: false,
                totalCount: action.payload.total_count
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_IS_FETCH_ERROR:
            return {
                ...state,
                isFetchError: action.payload
            }
        default:
            return state
    }
}

export const getUsersActionCreator = users => ({type: GET_USERS, payload: users})