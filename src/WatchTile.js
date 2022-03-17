import React from "react";
import classes from './WatchTile.module.css';

const WatchTile = (props) => {
    let isSelected = (props.pos === props.watchSelected);
    return(
    <div className={isSelected ? classes.selected : classes.tile} onClick={props.onWatchClick}>
      <img src={props.img} alt={props.alt} className={classes.watch}></img>
    </div>
    )
}

export default WatchTile;