import axios from 'axios'
import {setReposActionCreator} from "../reducers/reposReducer"

export const getRepos = (searchQuery="stars:%3E1", sort="stars") => async dispatch => {
    const response =  await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=${sort}`)
    dispatch(setReposActionCreator(response.data.items))
}