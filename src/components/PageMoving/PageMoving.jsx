import React from 'react'
import s from "./PageMoving.module.css"
import {setCurrentPageActionCreator} from "../../reducers/generalActions"
import {useDispatch} from "react-redux"

const PageMoving = props => {
    const dispatch = useDispatch()

    return (
        <div className={s.pagesNav}>
            {props.pages.map(page =>
                <span
                    className={props.currentPage === page ? s.currentPageNavItem : s.pagesNavItem}
                    key={page}
                    onClick={() => dispatch(setCurrentPageActionCreator(page))}
                >
                    {page}
                </span>)}
        </div>
    )
}

export default PageMoving