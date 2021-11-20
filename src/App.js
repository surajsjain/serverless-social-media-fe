import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./pages/home";

export default function App() {
    var base_req_url = "https://servelesssocialmedia.surajsjn.workers.dev/";

    return (
        <div style={{"padding": "2%", "font-family": "sans-serif"}}>
            <Router>
                <Switch>
                    <Route path="/">
                        <Home base_req_url = {base_req_url}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}