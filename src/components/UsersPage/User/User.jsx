import React, {useEffect, useState} from 'react'
import s from "./User.module.css"
import {NavLink} from "react-router-dom"
import {getUserRepos} from "../../../actions/users"
import {useDispatch} from "react-redux";

const User = props => {
    const dispatch = useDispatch()
    const {user} = props
    const [userRepos, setUserRepos] = useState([])

    useEffect(() => {
        getUserRepos(user.login, setUserRepos)
    }, [])

    const userReposElement =
        userRepos.map(repo =>
            <div className={s.repoLinksList} key={repo.id}>
                <a className={s.repoLinkItem} href={repo.html_url}>
                    {repo.name}
                </a>
            </div>)

    return (
        <div className={s.user}>
            <div className={s.userHeader}>
                <img className={s.userImg} src={user.avatar_url} alt="user photo"/>
                <NavLink to={`/users/${user.login}`}>
                    <div className={s.userName}>
                        User name: {user.login}
                    </div>
                </NavLink>
                {userRepos.length > 0 && <h3>Repos:</h3>}
                {userReposElement}
            </div>
            <a href={user.html_url} className={s.userLink}>
                Link: {user.html_url}
            </a>
        </div>
    )
}

export default User