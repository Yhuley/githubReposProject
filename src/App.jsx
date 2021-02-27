import React from 'react'
import {Route, Switch} from "react-router-dom"
import Repos from "./components/Repos/Repos"
import RepoAccountPage from "./components/RepoAccountPage/RepoAccountPage.jsx"

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/" component={Repos}/>
                <Route path="/repo/:userName/:repoName" component={RepoAccountPage}/>
                <Route render={() => <div>404 Not Found</div>}/>
            </Switch>
        </div>
    )
}

export default App