import axios from "axios"
import {getUsersActionCreator} from "../reducers/usersReducer"
import {setIsFetchErrorActionCreator, setIsFetchingActionCreator} from "../reducers/generalActions"

export const getUsers = (searchQuery, currentPage = 0, perPage = 5, sortParam, order) => async dispatch => {
    if (searchQuery.length === 0) searchQuery = "react"

    if (ajaxRequest) ajaxRequest.cancel()

    const ajaxRequest = axios.CancelToken.source()


    try {
        dispatch(setIsFetchingActionCreator(true))
        const response =
            await axios.get(`https://api.github.com/search/users?q=${searchQuery}&sort=${sortParam}&order=${order}&per_page=${perPage}&page=${currentPage}`,
                { cancelToken: ajaxRequest.token })
        dispatch(getUsersActionCreator(response.data))
    }catch (e) {
        if (axios.isCancel(e)) {
            console.log('Previous request canceled, new request is send', e.message)
        } else {
            dispatch(setIsFetchErrorActionCreator(true))
            dispatch(setIsFetchingActionCreator(false))
        }
    }
}

export const getUserRepos = async (userName, setUserRepos) => {
    const response = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=10&sort=stars`)
    setUserRepos(response.data)
}

export const getCurrentUser = async (userName, setCurrentUser) => {
    const response = await axios.get(`https://api.github.com/users/${userName}`)
    setCurrentUser(response.data)
}