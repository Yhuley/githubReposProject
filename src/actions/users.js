import axios from "axios"
import {getUsersActionCreator} from "../reducers/usersReducer"
import {setIsFetchingActionCreator} from "../reducers/generalActions"

export const getUsers = (searchQuery, currentPage = 0, perPage = 5, sortParam, order) => async dispatch => {
    if (searchQuery.length === 0){
        searchQuery = "react"
    }
    dispatch(setIsFetchingActionCreator(true))
    const response =
        await axios.get(`https://api.github.com/search/users?q=${searchQuery}&sort=${sortParam}&order=${order}&per_page=${perPage}&page=${currentPage}`)
    dispatch(getUsersActionCreator(response.data))
}

export const getUserRepos = async (userName, setUserRepos) => {
    const response = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=10&sort=stars`)
    setUserRepos(response.data)
}

export const getCurrentUser = async (userName, setCurrentUser) => {

}