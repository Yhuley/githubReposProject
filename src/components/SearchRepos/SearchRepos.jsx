import React, {useState, useEffect} from 'react'
import s from "./SearchRepos.module.css"
import {getRepos} from "../../actions/repos"
import {useDispatch, useSelector} from "react-redux"
import {setCurrentPageActionCreator} from "../../reducers/generalActions"

const SearchRepos = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.repos.currentPage)
    const perPage = useSelector(state => state.repos.perPage)



    useEffect(() => {
        dispatch(getRepos(repoName, currentPage, perPage, sortParam, order))
    }, [currentPage])

    const onFormSubmit = event => {
        event.preventDefault()
        dispatch(setCurrentPageActionCreator(1))
        dispatch(getRepos(repoName, currentPage, perPage, sortParam, order))
    }

    return (
        <form className={s.form} onSubmit={e => onFormSubmit(e)}>
            <input
                type="text"
                onChange={e => setRepoName(e.target.value)}
                className={s.input}
                value={repoName}
                placeholder={"enter repo name"}
            />
            <select className={s.input} value={sortParam} onChange={e => setSortParam(e.target.value)}>
                <option value="stars">Stars</option>
                <option value="forks">Forks</option>
                <option value="updated">Updated</option>
                <option value="help-wanted-issues">Help Wanted Issues</option>
            </select>
            <select className={s.input} value={order} onChange={e => setOrder(e.target.value)}>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
            </select>
            <input className={s.input} type="submit" value="SearchRepos"/>
        </form>
    )
}

export default SearchRepos