const SET_REPOS = "SET_REPOS"

const initialState = {
    repos: [],
    isFetching: true
}

const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                repos: action.payload
            }
        default:
            return state
    }
}

export default reposReducer

export const setReposActionCreator = repos => ({type:SET_REPOS, payload: repos})