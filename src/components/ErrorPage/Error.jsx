import React from 'react'
import s from "./Error.module.css"
import {useHistory} from "react-router-dom"

const Error = () => {
    const history = useHistory()
    return (
        <div className={s.content}>
            <p className={s.errorText}>Error happen</p>
            <button className={s.goHome} onClick={() => history.goBack()}>Go Home</button>
        </div>
    )
}

export default Error