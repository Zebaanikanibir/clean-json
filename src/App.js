import React, { createContext,useState }  from "react";
import "./App.css";
import { Home } from "./Components/Home/Home";
import EditPost from "./Components/EditPost/EditPost";
import DeletePost from "./Components/DeletePost/DeletePost";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import CreatePost from "./Components/CreatePost/CreatePost";
import LikeDislike from "./Components/LikeDislike/LikeDislike";



export default function App() {
  
  return (
    <div  className="App">
      

      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/edit">
            <EditPost></EditPost>
          </Route>
          <Route path="/delete">
            <DeletePost></DeletePost>
          </Route>
          <Route path="/create">
            <CreatePost></CreatePost>
          </Route>
          <Route path="/likeDislike">
            <LikeDislike></LikeDislike>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
