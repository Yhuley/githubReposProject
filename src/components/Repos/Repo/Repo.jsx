import React from 'react'
import s from './Repo.module.css'
import {NavLink} from "react-router-dom"

const Repo = props => {
    const {repo} = props

    return (
        <div className={s.repo}>
            <div className={s.repoHeader}>
                <NavLink to={`/repo/${repo.owner.login}/${repo.name}`}>
                    <div className={s.repoHederName}>
                        Repo name: {repo.name}
                    </div>
                </NavLink>
                <div className={s.repoHeaderStars}>{repo.stargazers_count} ★</div>
            </div>
            <p className={s.repoDescription}>Description: {repo.description}</p>
            <p className={s.repoLanguage}>{repo.language}</p>
            <p className={s.repoLastCommit}>Last commit: {repo.updated_at}</p>
            <a href={repo.html_url} className={s.repoLink}>
                Link: {repo.html_url}
            </a>
        </div>
    )
}

export default Repo