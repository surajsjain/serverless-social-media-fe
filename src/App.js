import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./pages/home";

export default function App() {
    return (
        <div style={{"padding": "2%", "font-family": "sans-serif"}}>
            <Router>
                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}