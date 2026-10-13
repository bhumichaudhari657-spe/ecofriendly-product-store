import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from "../../db/data.js";
import decorData from "../../db/decor.js";
import cleanData from "../../db/cleanData.js";
import kidsData from "../../db/kidsData.js";
import organicFood from "../../db/organicFood.js";
import './Subcard.css';
import { Link } from "react-router-dom"; 
import { useEffect ,useState} from "react";
import {useFilter} from '../FilterContext.jsx';
import axios  from "axios";
import { Heart } from "lucide-react";


export default function Subcard()
 {
 const { category,id } = useParams();
 let productList = [];
 
 
 const {qt,setqt} =useFilter();

 const increment=()=>{
  setqt(qt+1);
 }
 const decrement=()=>{
  if (qt>1)
  setqt(qt-1);
 }

 useEffect(() => {
    window.scrollTo(0, 0);
    setqt(1);
  }, []);

 if (category === "Home Decor") 
  productList = decorData;
 if (category === "cleanData")
   productList = cleanData;
 if (category === "Toys") 
  productList = kidsData;
 if (category === "Skincare") 
  productList = data;
 if (category === "Food") 
  productList = organicFood;

const product = productList.find(p => p.id === parseInt(id));
localStorage.setItem("Product",product.title);
localStorage.setItem("Price",product.newPrice);
if (!product) return <h2>Product not found</h2>;



const { isLoggedIn,isSignUp,loginData} = useFilter();
const navigate = useNavigate();

const handleAddToCart = async () => {
  if (!isLoggedIn) {
    // setPendingAction({ type: "cart", productId: product.id });
    navigate("/Login");
    return;
  } else if(!isSignUp){
    navigate("/Registration");
    return;
  }
  else{
  
    try {
      const res = await axios.post("http://localhost:4200/addToCart",{
        email:loginData.email, 
        id: product.id,
        title:product.title,
        quantity: qt,
        image:product.image,
        star:product.star,
        reviews: product.reviews,
        prevPrice:product.prevPrice,
        newPrice: product.newPrice,
        company: product.company,
        category:product.category,
        sustainability:product.sustainability,
    
      });

      console.log("Data sent to backend:", res.data);
      alert(res.data);
    } catch (err) {
      console.error("Error sending product:", err);
    }
  
    console.log(`Added ${product.title} to cart`);
  }
};

const handleBuyNow = () => {
  if (!isLoggedIn) {
   
    navigate("/Login");
  } else if(!isSignUp){
    navigate("/Registration");
  }
  else{
    navigate("/BuyNow" , {state : {checkoutType: 'single'}});
    console.log(`Buying ${product.title}`);
  }
};
const handleAddToWishlist = async () => {
  if (!isLoggedIn) {
    
    navigate("/Login");
    return;
  } else if(!isSignUp){
    navigate("/Registration");
    return;
  }
  else{
  
    try {
      const res = await axios.post("http://localhost:4200/addToWishlist",{
        email:loginData.email, 
        id: product.id,
        title:product.title,
        quantity: qt,
        image:product.image,
        star:product.star,
        reviews: product.reviews,
        prevPrice:product.prevPrice,
        newPrice: product.newPrice,
        company: product.company,
        category:product.category,
        sustainability:product.sustainability,
    
      });

      console.log("Data sent to backend:", res.data);
      alert(res.data);
    } catch (err) {
      console.error("Error sending product:", err);
    }
  
    console.log(`Added ${product.title} to wishllist`);
  }
};
console.log(product);
  return (
    <>
     <div className="Subcard-container" >
       <div className="hii"/>
       <div className="hii1">
          <img src="/allImages/15aug.avif" className="aug15"/>
          <section className="hero">
        <h1> Independence Day Green Sale - 50% OFF</h1>
        <h3>{'\u23F3'} Sale Ends: 25th August</h3>
        <p className="subhead"> {'\u{1F331}'} Greener India - Half the price , double the sale </p>
        </section>
       </div>
      <div className="wish-con">
        <div className="wishdiv">
          <button className="wishbtn" onClick={handleAddToWishlist}>< Heart /></button>
        </div>
        <img className="hii2" src={product.image} alt={product.title} id="proImg"/>         
      </div>
      <div className="hii3">
        <p className="subhead">{product.company}</p>
        <h1 >{product.title}</h1>
        <p className="subhead">{'\u2B50'}{product.reviews} reviews</p>
        {/* <h2>{'\u20B9'}{product.newPrice}</h2> */}
        <p className="oldPrice">{'\u20B9'}{product.prevPrice}</p>
        <p className="newPrice">{'\u20B9'}{product.newPrice}</p>
        <p className="payOver">Pay over time for orders over {'\u20B9'}10000  </p>
        <div className="qtmaindiv">
          <div className="qtdiv">
            <button className="but1" onClick={decrement}>-</button>
            <h6 className="qt">{qt}</h6>
            <button className="but2" onClick={increment}>+</button>
          </div>
          <button className="adCart" onClick={handleAddToCart}>Add to cart - {'\u20B9'}{product.newPrice}</button>
          <h5 className="freeShip">30-Day Satisfaction Guarantee | Free US Shipping {'\u20B9'}10000+</h5>
        </div>
        <button onClick={handleBuyNow} className="buynow" >Buy now</button>
        <div className="lastdiv">
        <h3 className="share">Share</h3>
        <a href="#" ><img src="/allImages/whatsappicon.webp" className="whatsapp"/></a>
        <a href="#" ><img src="/allImages/facebookicon.webp" className="facebook"/></a>
        <a href="#" ><img src="/allImages/shareicon.webp" className="shareicon"/></a>
        </div>
      </div>
    </div>
    </>
  );
}
