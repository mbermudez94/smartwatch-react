import React from "react";
import classes from './AmazonHeader.module.css';

const AmazonHeader = () =>{
    return(
        <div className={classes.navBar}>
            <img src="https://upload.wikimedia.org/wikipedia/donate/f/fd/Amazon-logo-white.svg" alt="Amazon logo"></img>
        </div>
    )
}

export default AmazonHeader;