export const SET_IS_FETCHING = "SET_IS_FETCHING"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export  const SET_IS_FETCH_ERROR = "SET_IS_FETCH_ERROR"

export const setIsFetchingActionCreator = bool => ({type: SET_IS_FETCHING, payload: bool})

export const setCurrentPageActionCreator = page => ({type: SET_CURRENT_PAGE, payload: page})

export const setIsFetchErrorActionCreator = bool => ({type: SET_IS_FETCH_ERROR, payload: bool})