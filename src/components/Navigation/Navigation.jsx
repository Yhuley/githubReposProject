import React from 'react'
import s from './Navigation.module.css'
import {NavLink, useLocation} from "react-router-dom"

const Navigation = () => {
    const {pathname} = useLocation()

    return (
        pathname !== "/error" ?
            <nav className={s.navigation}>
                <NavLink className={s.navigationItem} to={"/"}>Repos</NavLink>
                <NavLink className={s.navigationItem} to={"/users"}>Users</NavLink>
            </nav>
            :
            null
    )
}

export default Navigation