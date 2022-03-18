import React from "react";
import classes from './ProductDetails.module.css';

const ProductDetails = (props) =>{
    const colorOptions = props.data.colorOptions.map((item, pos)=>{
        let isSelected = pos === props.watchSelected;
        return(
            <div key={pos} className={isSelected ? classes.selected : classes.tile} onClick={()=>props.onWatchClick(pos)}>
                <img src={item.imageUrl} alt={item.styleName} className={classes.watch}></img>
            </div>
        )
    })

    const featureOptions = props.data.featureList.map((item, pos)=>{
        let isSelected = pos === props.featureSelected;
        return(
            <button key={pos} className={isSelected ? classes.btnSelected : classes.feature}
                onClick={()=>props.onFeatureClick(pos)}>{item}</button>
        )

    })

    return(
        <div>
            <div>
                <h1>{props.data.title}</h1>
                <p>{props.data.description}</p>
            </div>
            <div>
                <h3>Select Color</h3>
                {colorOptions}
            </div>
            <div>
                <h3>Features</h3>
                {featureOptions}<br></br>
                <button className={classes.buyBtn}>Buy Now</button>
            </div>
        </div>
    )
}

export default ProductDetails;