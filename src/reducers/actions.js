export const SET_IS_FETCHING = "SET_IS_FETCHING"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export  const SET_IS_FETCH_ERROR = "SET_IS_FETCH_ERROR"
export const SET_REPOS = "SET_REPOS"
export const GET_USERS = "GET_USERS"

export const setIsFetchingActionCreator = bool => ({type: SET_IS_FETCHING, payload: bool})

export const setCurrentPageActionCreator = page => ({type: SET_CURRENT_PAGE, payload: page})

export const setIsFetchErrorActionCreator = bool => ({type: SET_IS_FETCH_ERROR, payload: bool})

export const setReposActionCreator = repos => ({type: SET_REPOS, payload: repos})

export const getUsersActionCreator = users => ({type: GET_USERS, payload: users})