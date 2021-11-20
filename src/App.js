import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PrevPosts from "./pages/prevPosts";

export default function App() {
    return (
        <div style={{"padding": "2%", "font-family": "sans-serif"}}>
            <Router>
                <Switch>
                    <Route path="/">
                        <PrevPosts/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}