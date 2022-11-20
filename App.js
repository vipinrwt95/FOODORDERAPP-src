import React,{useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Card from "./components/UI/Card";
function App() {
  const[cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=>
  { 
    setCartIsShown(true);
  }
  const hideCartHandler=()=>
  {
    setCartIsShown(false); 
  }
  return (
   <React.Fragment>
     {cartIsShown && <Cart onClose={hideCartHandler}/>} 
     <Header onShowCart={showCartHandler} ></Header>
     <main>
     <Meals />
     </main>
   </React.Fragment>  

  );
}

export default App;
