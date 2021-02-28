import React from 'react'
import s from './Navigation.module.css'
import {NavLink} from "react-router-dom"

const Navigation = () => {
    return (
        <nav className={s.navigation}>
            <NavLink className={s.navigationItem} to={"/"}>Repos</NavLink>
            <NavLink className={s.navigationItem} to={"/users"}>Users</NavLink>
        </nav>
    )
}

export default Navigation