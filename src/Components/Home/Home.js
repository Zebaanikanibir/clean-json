import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    input: {
        position: 'relative',
        top: 0,
        left: 0
    },
    icon: {
        position: 'absolute',
        top: '60%',
        left: '62%',
        cursor: 'pointer',
        fontSize: '12px',

    },



}));


export const Home = () => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://jsonplaceholder.typicode.com/posts?q=" + search)
                .then((response) => response.json())
                .then((data) => setPosts(data))
                .catch((error) => console.log(error));
        };

        fetchData();
    }, [search]);


    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    const classes = useStyles();
    return (
        <div>

            <Input className={classes.input}
                id="standard-basic"
                placeholder="Search"
                type="text"
                onChange={handleSearch}
                style={{ marginTop: '10px' }}

                endAdornment={
                    <InputAdornment position="end">
                        <IconButton

                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />



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
