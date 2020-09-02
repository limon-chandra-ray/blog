import React from 'react';
import './style.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function index() {
    return (
        <header className="headers">
            <nav class="nav justify-content-center">
              <Link class="nav-link " to="#">Home </Link>
              <Link class="nav-link" to="#">About Us</Link>
              <Link class="nav-link " to="#">Contect Us </Link>
            </nav>
           <div class="social_icons">
               social media
           </div>
        </header>
    )
}
