import React, {useEffect, useState, useRef} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getRepos} from "../../actions/repos";
import Repo from "./Repo/Repo";
import s from "./Repos.module.css"
import {setCurrentPageActionCreator, setIsFetchingActionCreator} from "../../reducers/reposReducer";
import {createPages} from "../../utilits/createPages";
import Loading from "../Loading/Loading";

const Repos = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const perPage = useSelector(state => state.repos.perPage)
    const totalCount = useSelector(state => state.repos.totalCount)

    const pagesAmount = Math.ceil(totalCount / perPage)
    const pages = []
    createPages(pages, pagesAmount, currentPage)

    const [searchValue, setSearchValue] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    const onFormSubmit = event => {
        event.preventDefault()
        dispatch(setCurrentPageActionCreator(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }

    return (
        <div className={s.main}>
            <form className={s.form} onSubmit={e => onFormSubmit(e)}>
                <input
                    ref={inputRef}
                    type="text"
                    onChange={e => setSearchValue(e.target.value)}
                    className={s.input}
                    value={searchValue}
                />
            </form>
            <div className={s.pagesNav} disabled={isFetching}>
                {pages.map(page =>
                    <span
                        className={currentPage === page ? s.currentPageNavItem : s.pagesNavItem}
                        key={page}
                        onClick={() => dispatch(setCurrentPageActionCreator(page))}
                    >
                        {page}
                    </span>)}
            </div>
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