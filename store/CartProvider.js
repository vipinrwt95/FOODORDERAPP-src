import CartContext from "./cart-context";
import React,{useState} from 'react';
const CartProvider=props=>
{   
  const [items,updateItems]=useState([]);
  const addItemToCartHandler=(item)=>
  {
   if(!items.find(i=>i.id===item.id)) 
   {
    updateItems([...items,item])
   }
   else 

  { 
    const id=item.id;
    let quantity; 
    quantity=Number(items.find(i=>i.id===id).quantity)+Number(item.quantity);
  
    
    updateCartHandler(id,item,quantity)
    
  }
    
  }
  
const updateCartHandler=(id,item,quantity)=>{
    console.log(item.quantity);
    console.log(quantity)
    items.forEach((ele)=>
    {
     if(ele.id===id)
     {
      ele.quantity=quantity
     }
    })
     
    updateItems([...items])
 }
  
const cartContext={
    items:items,
    totalAmount:0,
    addItem:addItemToCartHandler,
    removeItem:updateCartHandler,
   };

    return (
      <CartContext.Provider value={cartContext}>
        {console.log(cartContext)}
         {props.children}
      </CartContext.Provider>)
}
export default CartProvider;