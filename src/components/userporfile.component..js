import React, { Component } from "react";
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class UserProfile extends Component{
    render(){

        return(
<body> 
    <div class="container">
        <div class="profile-header">
            <div class="profile-img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Black_square.jpg" width="200" 
                alt=""> </img>
            </div>
            <div class = "profile-nav-info">
                <h3 class="title">Profession: 
                </h3>
                <div class="About">
                    <p class="About Me">About Me:
                    </p>
                    <p class="Links">Social media: 
                    </p>
                    <p class="Followers">Followers:
                        <span id='my-display'>0</span>
                        <p>
                        <button onClick="followButton()">Follow</button>
                        </p>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <script src=".jquery/jquery.js"></script>
    </body>
    );
 }}