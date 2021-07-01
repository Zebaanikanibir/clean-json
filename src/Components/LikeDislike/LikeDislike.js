
import React, { useEffect, useState } from 'react'

import ShowLikeDislike from './ShowLikeDislike';

const LikeDislike = () => {
    const [posts, setPosts] = useState([])
    
    
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.log(error));
    };

    const onChange = async (id, title, body) => {

        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                title: title,
                body: body
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })
        .then(res => res.json())
        .then(data => 
            {
                const updatedPosts = posts.map((post) => {
                    if (post.id === id) {
                      post.title = title;
                      post.body = body;
                    }
          
                    return post;
                  });
          
                  setPosts((posts) => updatedPosts);
                 
            }
            )
            
            
    }


    return (
        <div>
            <div className="post">
                <h1>ID</h1>
                <h1>TITLE</h1>
                <h1>BODY</h1>
                <h1>Action</h1>
            </div>
            {
                
                posts.map((post) => <ShowLikeDislike key={post.id} id={post.id} body={post.body} title={post.title} onChange={onChange}></ShowLikeDislike>)

            }
        </div>
    )
}

export default LikeDislike
