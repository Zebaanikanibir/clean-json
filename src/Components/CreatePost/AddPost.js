import { Input } from '@material-ui/core';
import React from 'react'

const AddPost = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.title.value, evt.target.body.value);
    evt.target.title.value = "";
    evt.target.body.value = "";
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add User</h3>
      <Input className="input" placeholder="Title" name="title" />
      <Input className="input" placeholder="Value" name="body" />
      <button onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  )
}

export default AddPost
