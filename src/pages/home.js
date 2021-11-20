import React from "react";
import PrevPosts from "../components/containers/prevPosts";
import {Button} from "react-bootstrap";

function Home(props) {
    return (
        <div style={
            {
                "display": "flex",
                // "justify-content": "center",
                flexDirection: "column",
                alignItems: "center",
            }
        }>
            <h1>Welcome to Serverless Social</h1>
            <Button
                variant={"primary"}
                style={{"width": "40vw", marginBottom: "1%"}}
                onClick={() => {}}
            >
                Create a post
            </Button>
            <PrevPosts base_req_url={props.base_req_url}/>
        </div>
    );
}

export default Home;