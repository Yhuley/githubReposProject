import React from 'react'
import s from "./Error.module.css"

const Error = props => {

    return (
        <div className={s.content}>
            <p className={s.errorText}>Error</p>
            <button className={s.goHome} onClick={() => props.history.push('/')}>Go Home</button>
        </div>
    )
}

export default Error