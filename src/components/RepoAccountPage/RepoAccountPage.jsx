import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import {getActiveContributors, getCurrentRepo} from "../../actions/repos"
import s from './RepoAccountPage.module.css'
import Loading from "../Loading/Loading"

const RepoAccountPage = props => {
    const {userName, repoName} = useParams()
    const [repo, setRepo] = useState({owner: {}})
    const [activeContributors, setActiveContributors] = useState([])

    useEffect(() => {
        getCurrentRepo(userName, repoName, setRepo)
        getActiveContributors(userName, repoName, setActiveContributors)
    }, [])

    return (
        activeContributors.length > 0 ?
            <div className={s.content}>
                <div className={s.repoHeader}>
                    <div className={s.repoHeaderLeft}>
                        <img src={repo.owner.avatar_url} alt="owner photo" className={s.ownerPhoto}/>
                        <div className={s.repoName}>{repo.name}</div>
                    </div>
                    <div className={s.repoHeaderRight}>
                        <p>{repo.stargazers_count} ★</p>
                        <p>Description: {repo.description}</p>
                        <p>Forks: {repo.forks}</p>
                        <p>Watchers: {repo.watchers}</p>
                    </div>
                </div>
                <button className={s.backButton} onClick={() => props.history.goBack()}>back</button>
                <p>Most active contributors: </p>
                {
                    activeContributors.map(
                        (contributor, index) =>
                            <div key={contributor.id}>{index + 1 + ". " + contributor.login}</div>)
                }
            </div>
            :
            <Loading/>
    )
}

export default RepoAccountPage