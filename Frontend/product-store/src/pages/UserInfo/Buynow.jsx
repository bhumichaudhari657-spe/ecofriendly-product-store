import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Buynow.css";
import { useFilter } from "../../components/FilterContext";
import {useLocation} from "react-router-dom";
function Buynow() {
  const {qt} =useFilter();
  const navigate = useNavigate();


  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const Product = localStorage.getItem("Product");
 const Price = localStorage.getItem("Price");
  const {loginData} = useFilter();
  const [cart, setCart] = useState([]);
  const location = useLocation();
  const {checkoutType}=location.state || {};


  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;
  
    
    axios.get(`http://localhost:4200/user/${userId}`)
      .then((res) => {
        const userData = res.data;
        setFullName(userData.Fname+' '+userData.Lname || "");
        setAddress(userData.address || "");
        setPhoneNo(userData.phoneNo || "");
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
      });

     
  }, []);

  useEffect(() => {

    const fetchCart = async () => {
      try {
      
        console.log(loginData.email);
        // alert(loginData.email);
        const response = await axios.get('http://localhost:4200/cart',{params:{email:loginData.email}});

        setCart(response.data); 
        
      } catch (error) {
        console.error('no data in  cart:');
       
      }
    };
    
    fetchCart();
  }, []);
  const cancelHandler = () => {
    navigate(-4); 
  };

  const confirmBuyHandler = async (e) => {
    e.preventDefault();
    
    try{
      if(checkoutType ==='cart')
        {
      
       const orderres = await axios.post("http://localhost:4200/orderplaced",{
        email:loginData.email, 
        fullName:fullName,
        phone:phoneNo,
        address:address,
        cart
      });
      const res =await axios.post("http://localhost:4200/cartclear",{email:loginData.email});
      setCart([]);
      console.log("order placed success fully");
      alert(res.data);
      console.log(orderres.data);
      navigate(-4);
       }
        else if(checkoutType==='single'){
          alert("order placed successfully");
        }
        else{
          console.warn("unknowm checkouttype");
        }
   }
    catch(error){
      alert("clearing cart",error);
      console.log(error);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Complete Your Order</h2>
        <form onSubmit={confirmBuyHandler}>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="BuyNowText"
            required
          />
          Address:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="BuyNowTextArea"
            required
          />
          Phone No.:
          <input
            type="text"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            className="BuyNowText"
            required
          />

          <h2>Shipping Method:</h2>
          <input type="radio" name="shipping" value="standard" defaultChecked />
          Standard Free<br /><br />
          <input type="radio" name="shipping" value="express" />
          Express (₹100)

          <h2>Payment Method:</h2>
          <input type="radio" name="paymentMethod" value="cod" defaultChecked />
          Cash on Delivery<br /><br />
          <input type="radio" name="paymentMethod" value="upi" />
          UPI
          <p className="UPI"> -Use 87960580@ynb</p>
          <input type="radio" name="paymentMethod" value="card" />
          Credit/Debit Card<br /><br />

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={cancelHandler}>
              Cancel
            </button>
            <button type="submit" className="confirm-btn" onClick={confirmBuyHandler}>
              Confirm & Buy
            </button>
          </div>
        </form>
      </div>

      <div className="orderTotal">
        <div><h2 className="bill">Order Bill</h2></div>
        <div className="billh5">
          <h4>Quantity:</h4>
          <h4>{qt}</h4>
        </div>
        <div className="billh5">
          <h4>Delivery:</h4>
          <h4>{address}</h4>
        </div>
        <div className="billh5">
          <h4>Product:</h4>
          <h4><ul> {checkoutType === 'single' ? Product :cart.map((product) => (<li > {product.title } - {product.newPrice* product.quantity}</li>))}</ul></h4>
        </div>
        <div className="billh5">
          <h4>Order Total:</h4>
         {/* <h4>{cart.reduce((total,product) => {return total + product.newPrice * product.quantity})}</h4> */}
         <h4>
          {checkoutType === 'single' ? Price :
          cart.reduce((total, product) => {
        const price = Number(product?.newPrice) || 0;
        const qty = Number(product?.quantity) || 0;
        return total + price * qty;
      }, 0)
    }
         
</h4>

        </div>
        <h3>{"\u{1F69A}"}Estimated delivery by Thursday,25th Sept</h3>
      </div>
    </div>
  );
};

export default Buynow;