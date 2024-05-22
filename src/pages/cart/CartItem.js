import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import './cart.css'
function CartItem(props){
    const {id,name,price,image}=props.data;
    const {cartItems,addToCart,removeFromCart}=useContext(ShopContext)

    return (
        <div className="cartItem">
            <img src={image}/>
            <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: ${price}</p>
        </div>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        </div>
    )
}

export default CartItem;