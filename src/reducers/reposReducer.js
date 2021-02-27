const SET_REPOS = "SET_REPOS"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const initialState = {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 5,
    totalCount: 0
}

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
        default:
            return state
    }
}

export default reposReducer

export const setReposActionCreator = repos => ({type: SET_REPOS, payload: repos})

export const setIsFetchingActionCreator = bool => ({type: SET_IS_FETCHING, payload: bool})

export const setCurrentPageActionCreator = page => ({type: SET_CURRENT_PAGE, payload: page})