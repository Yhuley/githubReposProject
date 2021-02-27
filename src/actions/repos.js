import axios from 'axios'
import {setIsFetchingActionCreator, setReposActionCreator} from "../reducers/reposReducer"

export const getRepos =
    (searchQuery = "stars:%3E1", currentPage = 0, perPage = 5) => async dispatch => {
        if (searchQuery.trim().length === 0) {
            searchQuery = "stars:%3E1"
        }
        dispatch(setIsFetchingActionCreator(true))
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
        dispatch(setReposActionCreator(response.data))
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