import React from "react";
import classes from './Card.module.css';

const Card=(props)=>
{
    const allclasses=classes.card;
return(
    
    <div className={allclasses}>
    {props.children}
    </div>
)

}
export default Card;