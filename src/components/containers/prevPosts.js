import React, { useState } from "react";
import Post from '../post';

async function get_all_posts(setPosts, base_req_url)
{
    try{
        var resp = await fetch(base_req_url + "posts/");
        var all_posts = await resp.json();

        setPosts(all_posts);
    }
    catch (e)
    {
        return;
    }
}

const PrevPosts = (props) => {
    const [posts, setPosts] = useState([]);
    if(posts.length == 0)
    {
        get_all_posts(setPosts, props.base_req_url);
    }

    return (
        <div>
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