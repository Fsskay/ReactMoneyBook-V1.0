import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from "./containers/Home"
import Create from "./containers/Create"

function App() {
    return (
        <Router>
            <div className="App">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/Create">Create</Link>
                    <Link to="/edit/10">Edit</Link>
                </ul>
                <div className="container pb-5">
                    <Route path="/" exact component={Home} />
                    <Route path="/Create" component={Create} />
                    <Route path="/edit/:id" component={Create} />

                </div>
            </div>
        </Router>
    );
}

export default App;