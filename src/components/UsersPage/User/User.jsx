import React, {useEffect, useState} from 'react'
import s from "./User.module.css"
import {NavLink} from "react-router-dom"
import {getUserRepos} from "../../../actions/users"

const User = props => {
    const {user} = props
    const [userRepos, setUserRepos] = useState([])

    useEffect(() => {
        getUserRepos(user.login, setUserRepos)
    }, [])

    const userReposElement =
        userRepos.map(repo =>
            <a key={repo.id} className={s.repoLinkItem} href={repo.html_url}>
                {repo.name}
            </a>)

    return (
        <div className={s.user}>
            <div className={s.userHeader}>
                <img className={s.userImg} src={user.avatar_url} alt="user photo"/>
                <NavLink to={`/users/${user.login}`}>
                    <div className={s.userName}>
                        User name: {user.login}
                    </div>
                </NavLink>
                <a href={user.html_url} className={s.userLink}>
                    Link: {user.html_url}
                </a>
            </div>
            <div className={s.repoLinksList}>
                {userRepos.length > 0 && <div style={{color: "#EEFBFB", fontSize: "20px"}}>Repos:</div>}
                {userReposElement}
            </div>
        </div>
    )
}

export default User