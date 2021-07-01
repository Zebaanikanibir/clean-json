
import React, { useEffect, useState } from 'react'
import ShowEditPost from './ShowEditPost';


const EditPost = () => {
    const [posts, setPosts] = useState([])



    useEffect(() => {

        fetchData();
    }, [])

    const fetchData = async () => {
        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.log(error));
    };

    const onUpdate = async (id, title, body) => {

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
            .then(data => {
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
        <div className="App">
            <div className="post">
                <h1>ID</h1>
                <h1>TITLE</h1>
                <h1>BODY</h1>
                <h1>ACTION</h1>
            </div>

            {

                posts.map((post) => <ShowEditPost key={post.id} id={post.id} body={post.body} title={post.title} onUpdate={onUpdate}></ShowEditPost>)

            }

        </div>
    )
}

export default EditPost
