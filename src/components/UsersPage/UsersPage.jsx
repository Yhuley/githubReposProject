import React, {useState} from 'react'
import {useSelector} from "react-redux"
import User from "./User/User"
import s from './UsersPage.module.css'
import Loading from "../Loading/Loading"
import {createPages} from "../../utilits/createPages"
import PageMoving from "../PageMoving/PageMoving"
import Search from "../Search/Search";
import {getUsers} from "../../actions/users";
import {Redirect} from "react-router-dom";

const UsersPage = () => {
    const users = useSelector(state => state.users.items)
    const isFetching = useSelector(state => state.users.isFetching)
    const currentPage = useSelector(state=> state.users.currentPage)
    const perPage = useSelector(state => state.users.perPage)
    const totalCount = useSelector(state => state.users.totalCount)
    const isFetchError = useSelector(state => state.users.isFetchError)

    const [userName, setUserName] = useState('')
    const [sortParam, setSortParam] =useState('followers')
    const [order, setOrder] = useState('desc')


    const pagesAmount = Math.ceil(totalCount / perPage)
    const pages = []
    createPages(pages, pagesAmount, currentPage)

    if (isFetchError){
        return <Redirect to="/error"/>
    }

    const props = {
        placeHolder: "enter user name",
        currentPage,
        perPage,
        getItemsParams: [userName, currentPage, perPage, sortParam, order],
        inputValue: userName,
        setInputValue: setUserName,
        sortParam,
        setSortParam,
        order,
        setOrder,
        orderValues: [
            "repositories",
            "followers",
            "joined"
        ],
        buttonValue: "Search Users",
        getItems: getUsers,
    }
    return (
        <div className={s.users}>
            <Search props={props}/>
            <PageMoving pages={pages} currentPage={currentPage}/>
            {
                isFetching ? <Loading/> : users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    )
}

export default UsersPage