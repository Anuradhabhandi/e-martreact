import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";


const Navbar = () =>{

    const {cartItems} = useCart()

    return(
        <>
            <div className="navSection">
                <div className="title">
                    <h2>E-Mart</h2>
                </div>
                <div className="search">
                    <input type="text" placeholder="search..." />
                </div>
                <div className="user">
                    <div className="user-detail">
                        SignIn/SignUp
                    </div>
                    <Link to="/cart">
                        <div className="cart">Cart
                        <span>
                            {cartItems.length}
                        </span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="subMenu">
            <ul>
               <Link to="/mobiles">
                    <li>Mobiles</li>
               </Link>

               <Link to="/computer">
                <li>Computers</li>
               </Link>

               <Link to="/acData">
                <li>AC'S</li>
               </Link>

               <Link to="/watches">
                <li>Watches</li>
               </Link>

               <Link to="/Refrigerator">
                    <li>Refrigerator</li>
               </Link>

               <Link to="/kitchen">
                    <li>Kitchen</li>
               </Link>

               <Link to="/Furnitures">
               <li>Furnitures</li>
               </Link>

               <Link to="/Mens">
               <li>Mens</li>
               </Link>
               
               <Link to="/Women">
               <li>Womens</li>
               </Link>
            </ul>
            </div>
        </>
    )
}
export default Navbar;