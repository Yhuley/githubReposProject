import {combineReducers} from "redux"
import {createStore, applyMiddleware} from "redux"
import reposReducer from "../reducers/reposReducer"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import {usersReducer} from "../reducers/usersReducer"

const rootReducer = combineReducers({
    repos: reposReducer,
    users: usersReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))