import { Button } from '@material-ui/core';
import React from 'react'

const ShowDeletePost = ({ id, title, body, onDelete }) => {

  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div>
      <div className="post">
        <h4>{id}</h4>
        <h4>{title}</h4>
        <h4>{body}</h4>
        <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
      </div>
    </div>
  )
}

export default ShowDeletePost
