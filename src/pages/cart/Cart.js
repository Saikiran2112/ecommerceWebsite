import { Products } from "../../products";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import './cart.css'
function Cart(){
    const {cartItems,getTotalCartAmount}=useContext(ShopContext);
    const total=getTotalCartAmount();
    return (
        <div>
            {Products.map((product)=>{
                if(cartItems[product.id]!==0){
                    return <CartItem data={product}/>
                }
            })}
        <p>Subtotal:${total}</p>
        </div>
        
    )
}
export default Cart;