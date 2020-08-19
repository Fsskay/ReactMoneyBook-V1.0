import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from "./containers/Home"
import Create from "./containers/Create"
import {testItems, testCategories} from "./testData";
import {flatternArr} from "./utility"


export const AppContext = React.createContext()

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: flatternArr(testItems),
            categories: flatternArr(testCategories)
        };
        this.actions = {
            deleteItem:(item)=>{
                delete this.state.items[item.id]
                this.setState({
                    items:this.state.items
                })
            }
        }
    }

    render() {

        return (

            <AppContext.Provider value={{
                state:this.state,
                actions:this.actions
            }}>
                <Router>
                    <div className="App">
                        <ul>
                            <Link to="/">Home</Link>
                            <Link to="/Create">Create</Link>
                            <Link to="/edit/10">Edit</Link>
                        </ul>
                        <div className="container pb-5">
                            <Route path="/" exact component={Home}/>
                            <Route path="/Create" component={Create}/>
                            <Route path="/edit/:id" component={Create}/>

                        </div>
                    </div>
                </Router>
            </AppContext.Provider>

        );
    }
}

export default App;