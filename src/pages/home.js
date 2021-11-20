import React from "react";
import PrevPosts from "../components/containers/prevPosts";

function Home(props)
{
    return(
        <div>
            <PrevPosts base_req_url ={props.base_req_url} />
        </div>
    );
}

export default Home;