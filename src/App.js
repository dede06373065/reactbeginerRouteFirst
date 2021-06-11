import React, { Component } from 'react'
import Header from './components/Header/Header/Header'
import { Link, Route ,NavLink, Redirect} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-3">
                        <ul className="list-group">
                            <NavLink className="list-group-item " to="/home">Home</NavLink>
                            <NavLink  className="list-group-item" to="/About">About</NavLink >
                        </ul>
                    </div>
                    <div className="col-9">
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Redirect path="/home"/>
                       
                    </div>
                </div>

            </div>
        )
    }
}
