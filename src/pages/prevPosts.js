import React, { useState } from "react";
import Post from '../components/post';

async function get_all_posts(setPosts)
{
    try{
        var resp = await fetch("https://servelesssocialmedia.surajsjn.workers.dev/posts/");
        var all_posts = await resp.json();

        setPosts(all_posts);
    }
    catch (e)
    {
        return;
    }
}

const PrevPosts = () => {
    const [posts, setPosts] = useState([]);
    if(posts.length == 0)
    {
        get_all_posts(setPosts);
    }

    return (
        <div style={
            {
                "display": "flex",
                // "justify-content": "center",
                "flex-direction": "column",
                "align-items": "center",
            }
        }>
            <h1>Posts</h1>
            <Post
                title = "Howdy!"
                username = "missrev"
                content = "Keep on coding cuz you like it!"
            />
            {/*{posts.map((post) => <div>{post['title']}</div>)}*/}
        </div>
    );
};

export default PrevPosts;