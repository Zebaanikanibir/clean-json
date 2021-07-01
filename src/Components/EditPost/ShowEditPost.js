import { Button, Input } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import './Post.css';
const ShowEditPost = ({ id, title, body, onUpdate }) => {
    const [isUpdate, setIsUpdate] = useState(false)

    const handleUpdate = () => {

        setIsUpdate(!isUpdate)
    }
    const handleOnUpdateSubmit = (evt) => {
        console.log(evt.target.title.value)
        console.log(evt.target.body.value)
        onUpdate(id, evt.target.title.value, evt.target.body.value);
        setIsUpdate(!isUpdate);
        evt.preventDefault();
    };
    return (


        <div>
            {
                isUpdate ? (
                    <form onSubmit={handleOnUpdateSubmit}>
                        <Input className="input" placeholder="Title" name="title" defaultValue={title} />
                        <Input className="input" placeholder="Body" name="body" defaultValue={body} />
                        <button onSubmit={handleOnUpdateSubmit}>Save</button>
                    </form>
                )
                    :
                    (
                        <div className="post">
                            <h4>{id}</h4>
                            <h4>{title}</h4>
                            <h4>{body}</h4>
                            <Button variant="contained" color="primary" onClick={handleUpdate}>Update</Button>
                        </div>
                    )
            }
        </div>

    )
}

export default ShowEditPost
