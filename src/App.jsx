import React, {Fragment} from 'react'
import {Route, Switch} from "react-router-dom"
import Repos from "./components/Repos/Repos"
import RepoAccountPage from "./components/RepoAccountPage/RepoAccountPage.jsx"
import Error from "./components/ErrorPage/Error"
import Navigation from "./components/Navigation/Navigation"
import UsersPage from "./components/UsersPage/UsersPage"
import UserAccountPage from "./components/UserAccountPage/UserAccountPage"
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <Fragment>
            <Navigation/>
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Repos}/>
                    <Route path="/repo/:userName/:repoName" component={RepoAccountPage}/>
                    <Route path="/error" component={Error}/>
                    <Route exact path="/users" component={UsersPage}/>
                    <Route exact path="/users/:userName" component={UserAccountPage}/>
                    <Route render={() => <div>404 Not Found</div>}/>
                </Switch>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default App