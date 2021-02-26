import React from 'react'
import {Route} from "react-router-dom"
import Repos from "./components/Repos/Repos"

const App = () => {
    return (
        <div className="app">
            <Route exact path="/" render={() => <Repos/>}/>
        </div>
    )
}

export default App