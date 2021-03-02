import React, {useEffect} from 'react'
import s from "./Search.module.css"
import {useDispatch} from "react-redux"
import {setCurrentPageActionCreator} from "../../reducers/actions"

const Search = ({props}) => {
    const dispatch = useDispatch()

    const onFormSubmit = event => {
        event.preventDefault()
        if (props.inputValue.trim().length > 0){
            dispatch(setCurrentPageActionCreator(1))
            dispatch(props.getItems(...props.getItemsParams))
        }
    }

    useEffect(() => {
        dispatch(props.getItems(...props.getItemsParams))
    }, [props.currentPage])

    return (
        <form className={s.form} onSubmit={e => onFormSubmit(e)}>
            <input
                type="text"
                onChange={e => props.setInputValue(e.target.value)}
                className={s.input}
                value={props.inputValue}
                placeholder={props.placeHolder}
            />
            <select className={s.input} value={props.sortParam} onChange={e => props.setSortParam(e.target.value)}>
                {
                    props.orderValues.map(order => <option  key={order} value={order}>{order}</option>)
                }
            </select>
            <select className={s.input} value={props.order} onChange={e => props.setOrder(e.target.value)}>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
            </select>
            <input className={s.input} type="submit" value={props.buttonValue}/>
        </form>
    )
}

export default Search