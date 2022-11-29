import React,{useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useContext } from "react";

import CartProvider from "./store/CartProvider";
import CartContext from "./store/cart-context";
function App() {
  const[cartIsShown,setCartIsShown]=useState(false);
  const ctx=useContext(CartContext)
  const showCartHandler=()=>
  { 
    setCartIsShown(true);
    
  }
  const hideCartHandler=()=>
  {
    setCartIsShown(false); 
  }
  return (
   <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler}/>} 
     <Header onShowCart={showCartHandler} ></Header>
     <main>
     <Meals />
     </main>
   </CartProvider>  

  );
}

export default App;
