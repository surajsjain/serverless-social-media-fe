import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Posts from "./pages/posts";

export default function App() {
    return (
        <div style={{"padding": "2%"}}>
            <Router>
                <Switch>
                    <Route path="/">
                        <Posts/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}