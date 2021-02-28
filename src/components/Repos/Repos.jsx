import React, {useState} from 'react'
import {useSelector} from "react-redux"
import {Redirect} from "react-router-dom"
import Repo from "./Repo/Repo"
import s from "./Repos.module.css"
import {createPages} from "../../utilits/createPages"
import Loading from "../Loading/Loading"
import PageMoving from "../PageMoving/PageMoving"
import Search from "../Search/Search"
import {getRepos} from "../../actions/repos"

const Repos = () => {
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const perPage = useSelector(state => state.repos.perPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const isFetchError = useSelector(state => state.repos.isFetchError)

    const [repoName, setRepoName] = useState('')
    const [sortParam, setSortParam] = useState('stars')
    const [order, setOrder] = useState('desc')

    const pagesAmount = Math.ceil(totalCount / perPage)
    const pages = []
    createPages(pages, pagesAmount, currentPage)

    if (isFetchError){
        return <Redirect to="/error"/>
    }

    const props = {
        placeHolder: "enter repo name",
        currentPage,
        perPage,
        getItemsParams: [repoName, currentPage, perPage, sortParam, order],
        inputValue: repoName,
        setInputValue: setRepoName,
        sortParam,
        setSortParam,
        order,
        setOrder,
        orderValues: [
            "stars",
            "forks",
            "updated",
            "help-wanted-issues"
        ],
        buttonValue: "Search Repo",
        getItems: getRepos,
    }
    return (
        <div className={s.main}>
            <Search props={props}/>
            <PageMoving pages={pages} currentPage={currentPage}/>
            {
                isFetching === false ?
                    repos.map(repo => <Repo key={repo.id} repo={repo}/>)
                    :
                    <Loading/>
            }
        </div>
    )
}

export default Repos