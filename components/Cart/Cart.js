import React,{useContext, useState} from "react";
import  ReactDOM  from "react-dom";
import Card from "../UI/Card";
import classes from './Cart.module.css';
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart=props=>
{  
  const ctx=useContext(CartContext);
  const [Items,updateCarts]=useState(ctx.items)
  let totalamount=0;
  ctx.items.forEach(item => {
    totalamount=Math.round(totalamount+(item.price*item.quantity));
  });
  const hasItems=ctx.items.length>0;
  
  const cartItemRemoveHandler=item=>
  { if(item.quantity>1)
    {
      ctx.addItem({...item,quantity:-1});
    }
    else if(item.quantity==1)
    {
       const index=ctx.items.indexOf(item)
       console.log(item.id);
       console.log(index);
      if(index>-1)
      {
        ctx.items.splice(index,1)
      }
      updateCarts(ctx.items)
    }
    
  }
 
  
  const cartItemAddHandler=item=>
  {
    ctx.addItem({...item,quantity:1});
  }
 
  const cartItems=(<ul className={classes['cart-items']}>
    { ctx.items.map((item)=>
      
    (  
     <CartItem key={item.id} name={item.name} price={item.price} amount={item.quantity} onRemove={cartItemRemoveHandler.bind(null,item)} onAdd={cartItemAddHandler.bind(null,item)} />
    ))}
    </ul> 
  )
 

return (
        <Modal onClose={props.onClose}>
        {cartItems} 
      <div className={classes.total}>
       <span>Total Amount</span>
       <span>{totalamount}</span>
      </div>
      <div className={classes.actions}>
       <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
       {hasItems && <button className={classes.button}>Order</button>}
      </div>
      </Modal> 
    )
     
}

export default Cart;

