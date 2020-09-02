import React from 'react';
import './style.css';
import Header from '../../Components/Header';
import Hero from '../../Components/Hero';
import Navbar from '../../Components/Navbar';

function index() {
    return (
        <div className="header">
            <Header/>
            <Hero/>
            <Navbar/>
        </div>
    

    )
}

export default index
