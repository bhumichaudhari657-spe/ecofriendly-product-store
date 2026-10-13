
import React, { useEffect, useState } from 'react';
import { useFilter } from '../../components/FilterContext';
import '../../components/Card/Card.css';
import axios  from "axios";
function Wishlist(){
    const [wishlist, setWishlist] = useState([]);
    const {isLoggedIn,isSignUp,loginData} = useFilter();

    
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        console.log(loginData.email);
        const response = await axios.get('http://localhost:4200/wishlist',{params:{email:loginData.email}});

        setWishlist(response.data); 
        
      } catch (error) {
        console.error('Error fetching wishlist:');
       
      }
    };

    fetchWishlist();
  }, []);

  if (!isLoggedIn) return <p>Please login to see your wishlist.</p>;
  
  if (!wishlist ) return <p>Your cart is empty.</p>;


    return(
        <div className="cart-container">
        {
        wishlist.map((product) => (
        <section className="card" >
        <img src={product.image} className="card-img" alt="img" />
        <div className="card-detaitls">
          <h3 className="card-title">{product.title}</h3>

          <section className="card-reviews">


            <div className="total-reviews">total reviews :{product.reviews || 0}</div>
          </section>

          <section className="card-price">
            {product.prevPrice && <del>₹{product.prevPrice}</del>} ₹{product.newPrice}
            
          </section>
          </div>
        </section>
      ))}
    </div>
        
    )
}
export default Wishlist;