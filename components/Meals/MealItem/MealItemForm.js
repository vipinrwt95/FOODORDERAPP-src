import classes from './MealItemForm.module.css';
const MealItemForm=()=>
{
     
return <form className={classes.form}>
       <label><b>Amount</b></label>
       <input type="number" /> <br/>
       <button>ADD</button>
       </form>


}
export default MealItemForm;