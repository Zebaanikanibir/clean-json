import React, { useEffect, useState } from 'react'
import AddPost from './AddPost';

const CreatePost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  };

  const onAdd = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setPosts((posts) => [...posts, data]);

      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <AddPost onAdd={onAdd}></AddPost>
      <div className="home">
        <h1>ID</h1>
        <h1>TITLE</h1>
        <h1>BODY</h1>
      </div>
      {
        posts.map((post) => (
          <div className="home">
            <h4>{post.id}</h4>
            <h4>{post.title}</h4>
            <h4>{post.body}</h4>

          </div>

        ))
      }
    </div>
  )
}

export default CreatePost
