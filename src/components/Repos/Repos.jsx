import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getRepos} from "../../actions/repos";
import Repo from "../Repo/Repo";
import s from "./Repos.module.css"

const Repos = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.repos)

    useEffect(() => {
        dispatch(getRepos())
    }, [])

    return (
        <div className={s.main}>
            <button onClick={()=> dispatch(getRepos("forks:%3E1", "forks"))}></button>
            {
                repos.map(repo => <Repo key={repo.id} repo={repo}/>)
            }
        </div>
    )
}

export default Repos