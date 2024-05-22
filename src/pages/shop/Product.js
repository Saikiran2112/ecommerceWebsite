import './Shop.css'
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
function Product(props){
    
    const {id,name,price,image}=props.data;
    const {cartItems,addToCart}=useContext(ShopContext)
    const cartAmount=cartItems[id];
    return (
        <div className="product">
        <img src={image} />
        <div className="description">
          <p>
            <b>{name}</b>
          </p>
          <p> ${price}</p>
        </div>
        <button className="addToCartBttn" onClick={()=>addToCart(id)}>
            Add to Cart {cartAmount>0 && <>({cartAmount})</>}
        </button>
        </div>
    )
}
export default Product;