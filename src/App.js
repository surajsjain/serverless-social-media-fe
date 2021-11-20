import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Posts from "./pages/posts";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Posts/>
                </Route>
            </Switch>
        </Router>
    );
}