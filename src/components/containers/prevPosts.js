import React, { useState } from "react";
import Post from '../post';

async function get_all_posts(setPosts, base_req_url)
{
    try{
        var resp = await fetch(base_req_url + "posts/");
        var all_posts = await resp.json();
        console.log(all_posts);

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
            {
                posts.slice(0).reverse().map(
                    (post) =>
                    <Post
                        title = {post['title']}
                        username = {post['username']}
                        content = {post['content']}
                    />
                )
            }
        </div>
    );
};

export default PrevPosts;