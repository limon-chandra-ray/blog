import React from 'react';
import './style.css';
import Serach from '../../media/serach.png';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import Home from '../../Container/Home'
import About from '../../Container/About'
import Post from '../../Container/Post'
import ContactUs from '../../Container/ContactUs'
import BlogPost from '../BlogPost';



export default function Navbar() {
    return (
        <Router>
            <div className="navbar">
                    
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/post">Posts</Link></li>
                    <li><Link to="/contuct">Contact</Link></li>
                </ul>
            
            
                <div className="search">
                    <input type="text"/>
                    <button type="submit"><img src={Serach} alt="name"/></button>
                </div>
            
                
            </div>
            <Switch>
                <Route path='/about' component={About}/>
                <Route path='/post' component={Post}/>
                <Route path='/contuct' component={ContactUs}/>
                <Route path='/' exact component={Home}/>
                <Route path='/homevalue' exact component={BlogPost}/>
            </Switch>
        </Router>
        
    )
}


