import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';
const MealItemForm=(props)=>
{
 
 const ctx=useContext(CartContext);
 
const addItemToCart=(event)=>
 {
    event.preventDefault();
    const quantity=document.getElementById('amount_' + props.id)
  ctx.addItem({...props.item,quantity:quantity.value});
}


return <form className={classes.form}>
       <Input label='Amount' input={{ id: 'amount_' + props.id,type:'number',min:'1',max:'10',step:'1',defaultValue:'1'}} ></Input>
       <button onClick={addItemToCart}>ADD</button>
       </form>


}
export default MealItemForm;