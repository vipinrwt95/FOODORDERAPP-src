import React from "react";
import mealsimage from'../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";


const Header=props=>
{
  return(
    <React.Fragment>
     <header className={classes.header}>
        <h1>ORDER FOOD</h1>
        <HeaderCartButton />
     </header>
     <div className={classes['main-image']}>
     <img src={mealsimage}alt="table full of meals"/>   
    </div>  
       
    </React.Fragment>
  )

};

export default Header;