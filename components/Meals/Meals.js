import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import Card from "../UI/Card";

const Meals=()=>
{
  
  return<Fragment>
     <MealsSummary />
    
     <AvailableMeals />   
    
 </Fragment>  

}
export default Meals;