import React from 'react'
import s from './Navigation.module.css'
import {NavLink, useLocation} from "react-router-dom"

const Navigation = () => {
    const {pathname} = useLocation()

    return (
        pathname !== "/error" ?
            <nav className={s.navigation}>
                <NavLink className={s.navigationItem} activeClassName={s.active} to={"/"}>Repos</NavLink>
                <NavLink className={s.navigationItem} activeClassName={s.active} to={"/users"}>Users</NavLink>
            </nav>
            :
            null
    )
}

export default Navigation