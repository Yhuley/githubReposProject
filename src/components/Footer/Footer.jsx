import React from 'react'
import s from "./Footer.module.css"
import {useLocation} from "react-router-dom"

const Footer = () => {
    const {pathname} = useLocation()

    return (
        pathname !== "/error" ?
            <footer className={s.footer}>
                Created By &#160;
                <a className={s.footerLink} href="https://github.com/Yhuley">@Yhuley</a>
            </footer>
            :
            null
    )
}

export default Footer