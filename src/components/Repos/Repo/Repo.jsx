import React from 'react'
import s from './Repo.module.css'
import {NavLink} from "react-router-dom"

const Repo = props => {
    const {repo} = props

    return (
        <div className={s.repo}>
            <div className={s.repoHeader}>
                <div className={s.repoHeaderName}>
                    <NavLink to={`/repo/${repo.owner.login}/${repo.name}`}>
                        Repo name: {repo.name}
                    </NavLink>
                </div>
                <div className={s.repoHeaderStars}>{repo.stargazers_count} ★</div>
            </div>
            <div className={s.repoLastCommit}>Last commit: {repo.updated_at}</div>
            <a href={repo.html_url} className={s.repoLink}>
                Link: {repo.html_url}
            </a>
        </div>
    )
}

export default Repo