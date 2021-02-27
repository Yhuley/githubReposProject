import React, {useState, useEffect, Fragment} from 'react'
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
    console.log(activeContributors)
    return (

        activeContributors.length > 0 ?
            <div className={s.content}>
                <button onClick={() => props.history.goBack()}>back</button>
                <img src={repo.owner.avatar_url} alt="owner phot" className={s.ownerPhoto}/>
                <div className={s.repoName}>{repo.name}</div>
                <div className={s.stars}>{repo.stargazers_count} ★</div>
                <div className={s.description}>Description: {repo.description}</div>
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