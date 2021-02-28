import axios from 'axios'
import {setReposActionCreator} from "../reducers/reposReducer"
import {setIsFetchErrorActionCreator, setIsFetchingActionCreator} from "../reducers/generalActions";

export const getRepos =
    (searchQuery = "stars:%3E1", currentPage = 0, perPage = 5, sortParam, order) => async dispatch => {
        if (searchQuery.trim().length === 0) {
            searchQuery = "stars:%3E1"
        }
        try {
            dispatch(setIsFetchingActionCreator(true))
            const response =
                await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=${sortParam}&order=${order}&per_page=${perPage}&page=${currentPage}`)
            dispatch(setReposActionCreator(response.data))
        }catch (e){
            dispatch(setIsFetchErrorActionCreator(true))
            dispatch(setIsFetchingActionCreator(false))
        }

    }

export const getCurrentRepo = async (userName, repoName, setRepo) => {
    const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}`)
    setRepo(response.data)
}

export const getActiveContributors = async (userName, repoName, setActiveContributors) => {
    const response =
        await axios.get(`https://api.github.com/repos/${userName}/${repoName}/contributors?page=1&per_page=10`)
    setActiveContributors(response.data)
}