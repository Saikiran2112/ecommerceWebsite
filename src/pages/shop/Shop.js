import { Products } from "../../products";
import Product from './Product'
function Shop(){
    return (
        <div className="shop">
        <div className="shopTitle">
          <h1>PedroTech Shop</h1>
        </div>
  
        <div className="products">
            {Products.map((product)=>{
                return <Product data={product}/>
            })}
        </div>
      </div>
    )
}
export default Shop;
