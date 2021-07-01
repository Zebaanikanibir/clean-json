import React, { useEffect, useState } from 'react'
import ShowDeletePost from './ShowDeletePost';

const DeletePost = () => {
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

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    })
      .then((res) => {

        if (res.status !== 200) {
          return;
        } else {
          setPosts(
            posts.filter((post) => {
              return post.id !== id;
            })
          );
        }
      })
  }
  return (
    <div>
      <div className="post">
        <h1>ID</h1>
        <h1>TITLE</h1>
        <h1>BODY</h1>
        <h1>ACTION</h1>
      </div>
      {
        posts.map((post) => <ShowDeletePost key={post.id} id={post.id} body={post.body} title={post.title} onDelete={onDelete}></ShowDeletePost>)
      }
    </div>
  )
}

export default DeletePost
