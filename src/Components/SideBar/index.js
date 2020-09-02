import React from 'react'
import './style.css'
import Card from '../Ui/Card'

export default function SideBar() {
    return (
        <div className='sidebar'>
            <Card>
                <div className="sidehader">
                    <span>About Us</span>
                    <div className="cardimage">
                        <img alt="sodeimage" src={require('../../media/sidebar/cr-7.jpg')}></img>
                    </div>
                    <div className="card_body">
                    <p>Ronaldo became Manchester United's first-ever Portuguese player when he signed before the 2003–04 season.His transfer fee of £12.24 million made him, at the time, the most expensive teenager in English football history</p>
                    </div>
                    
                </div>
                <div>
                    <h1> </h1>
                </div>
                <div className="sidehader">
                    <span>Social Network</span>
                </div>
                <div>
                    <h1> </h1>
                </div>
                <div className="sidehader">
                    <span>Recent Post</span>
                    <div className="recentPosts">
                        <h2> </h2>
                        <div className="recetPost">
                            <h5 className="title">Fitness Mantors to live Fit life</h5>
                            <p className="postDate">01 Aug 2020</p>
                        </div>
                        <div className="recetPost">
                            <h5 className="title">Fitness Mantors to live Fit life</h5>
                            <p className="postDate">01 Aug 2020</p>
                        </div>
                        <div className="recetPost">
                            <h5 className="title">Fitness Mantors to live Fit life</h5>
                            <p className="postDate">01 Aug 2020</p>
                        </div>
                    </div>
                    <h3> </h3>
                </div>
            </Card>
            
        </div>
    )
}
