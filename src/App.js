import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./pages/home";
import CreatePost from "./pages/create_post";

export default function App() {
    var base_req_url = "https://servelesssocialmedia.surajsjn.workers.dev/";

    return (
        <div style={{"padding": "2%", fontFamily: "sans-serif"}}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home base_req_url = {base_req_url}/>
                    </Route>
                    <Route exact path="/create">
                        <CreatePost base_req_url = {base_req_url} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}