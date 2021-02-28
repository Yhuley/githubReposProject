import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import {getCurrentUser, getUserRepos} from "../../actions/users"
import Loading from "../Loading/Loading"
import s from "./UserAccountPage.module.css"

const UserAccountPage = () => {
    const {userName} = useParams()
    const [currentUser, setCurrentUser] = useState({})
    const [userRepos, setUserRepos] = useState([])

    useEffect(() => {
        getCurrentUser(userName, setCurrentUser)
        getUserRepos(userName, setUserRepos)
    }, [])
    return (
        Object.keys(currentUser).length > 0 ?
            <div className={s.user}>
                <div className={s.userInfo}>
                    <img className={s.userPhoto} src={currentUser.avatar_url} alt={"user photo"}/>
                    <p className={s.userParagraph}>Name: {currentUser.login}</p>
                    <p className={s.userParagraph}>Followers: {currentUser.followers}</p>
                    <p className={s.userParagraph}>Public repos number: {currentUser.public_repos}</p>
                    <p className={s.userParagraph}>Registration date: {currentUser.created_at}</p>
                    <p className={s.userParagraph}>Last commit: {currentUser.updated_at}</p>
                    <a href={currentUser.html_url} className={s.userLink}>Link: {currentUser.html_url}</a>
                </div>
                <div className={s.userReposList}>
                    {userRepos.map(repo =>
                        <div key={repo.id} className={s.userReposListItem}>
                            <p className={s.repoParagraph}>{repo.name}</p>
                            <p className={s.repoParagraph}>{repo.watchers_count} ★</p>
                            <a className={s.repoLink} href={repo.html_url}>Link: {repo.html_url}</a>
                        </div>
                    )}
                </div>
            </div>
            :
            <Loading/>
    )
}

export default UserAccountPage