import React, { useState } from "react";

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

const Posts = () => {
    const [posts, setPosts] = useState([]);
    if(posts.length == 0)
    {
        get_all_posts(setPosts);
    }

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post) => <div>{post['title']}</div>)}
        </div>
    );
};

export default Posts;