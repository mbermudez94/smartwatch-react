import React from "react";
import classes from './FeatureButton.module.css';

const FeatureButton = (props) =>{
    let isSelected = (props.pos === props.featureSelected);

    return(
        <button className={isSelected ? classes.selected : classes.feature}
                onClick={props.onFeatureClick}>
                    {props.name}</button>
    )
}

export default FeatureButton;