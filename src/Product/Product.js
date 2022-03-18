import React from "react";
import classes from './Product.module.css';

const Product = (props) =>{
    let showFeature = props.featureNameSelected

    return(
        <div className={classes.main}>
            <img src={props.img}></img>
            <div className={showFeature === 'Time' ? classes.time : classes.noShow}>
                {`${new Date().getHours()}:${new Date().getMinutes() > 9 ? new Date().getMinutes() : '0'+new Date().getMinutes()}`}
            </div>
            <div className={showFeature === "Heart Rate" ? classes.heart : classes.noShow}>
                <img className={classes.heartIcon} src="https://www.iconpacks.net/icons/1/free-heart-icon-431-thumb.png" alt="heart"></img>
                <p className={classes.heartRate}>78</p>
            </div>
        </div>
    )
}

export default Product;