import {Link} from "react-router-dom"
import "./Navbar.css"
function Navbar(){
    return (
    <div className="navbar">
        <div className="links">
            <Link to="/">Shop</Link>
            <Link to="/cart">Cart</Link>
        </div>
        
    </div>
    )
}
export default Navbar;