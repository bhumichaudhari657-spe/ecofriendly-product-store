import React, { useEffect, useState } from 'react';
import '../../components/Card/Card.css';
import axios from 'axios';
import './Cart.css';
import { useFilter } from '../../components/FilterContext';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const {isLoggedIn,isSignUp,loginData} = useFilter();

  const navigate = useNavigate();

  useEffect(() => {

    const fetchCart = async () => {
      try {
        console.log(loginData.email);
        const response = await axios.get('http://localhost:4200/cart',{params:{email:loginData.email}});

        setCart(response.data); 
        
      } catch (error) {
        console.error('Error fetching cart:', error);
       
      }
    };
    
    fetchCart();
  }, []);

  const handleCartBuyNow = () => {
    navigate("/BuyNow",{state:{checkoutType : 'cart'}});
    console.log(`Buying `);
  
};

  if (!isLoggedIn) return <p>Please login to see your cart.</p>;
  
  if (!cart ) return <p>Your cart is empty.</p>;

  return (
    <div>
      <div className='cartBuy'>
      <button type="submit" className="confirmCartBuy-btn" onClick={handleCartBuyNow}>
              Confirm & Buy
            </button>
      </div>
    <div className="cart-container">
      {cart.map((product) => (
        <section className="card" >
        <img src={product.image} className="card-img" alt="img" />
        <div className="card-detaitls">
          <h3 className="card-title">{product.title}</h3>

          <section className="card-reviews">
           

            <span className="total-reviews">({product.reviews || 0})</span>
          </section>

          <section className="card-price">
            {product.prevPrice && <del>₹{product.prevPrice}</del>} ₹{product.newPrice}
            
          </section>
          </div>
        </section>
      ))}
      
    </div>
    
    </div>
  );
};

export default Cart;