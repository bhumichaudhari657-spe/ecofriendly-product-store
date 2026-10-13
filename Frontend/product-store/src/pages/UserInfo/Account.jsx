import axios from "axios";
import { useState,useEffect } from "react";
import './Account.css';
import { Heart,ShoppingCart,User,Store } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
function Account()
{
    const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const navigate=useNavigate();

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
  const clearText=()=>{
    setFullName("");
    setAddress("");
    setPhoneNo("");
    setTimeout(()=> navigate('/'),5);
    localStorage.removeItem("userId");
}

   return(
    <>
    <div className="MyaccDiv"> 
     <div className="Intro"> 
        <User color="black" size={32}/>
        <h2>  Hello, {fullName}</h2>
    </div>    
     <div className="orderCartDiv">
        <Link to="/Cart" className="linkList">
        <div className="orderCartSubdiv">
            <ShoppingCart  color="white" size={20}/>
              <h3 className="linkList">My cart</h3>
        </div>
        </Link>
        <Link to="/Wishlist" className="linkList" >
        <div className="orderCartSubdiv">
           <Heart color="white" size={20}/>
           <h3 >My wishlist</h3>
        </div>
        </Link>
     </div> 
            <form className="MyaccDetail" >
          <h2>Full Name:</h2>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="AccText"
            required
          />
         <h2> Address:</h2>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="AccText"
            required
          />
          <h2>Phone Number:</h2>
          <input
            type="text"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            className="AccText"
            required
          />
          </form>
       <div className="Earn">
        <h1>Earn with us</h1>
        <div className="Store">
        <Store color="black" size={25}/>
        <Link to="/Common" className="linkList" ><h2>Sell on Ecohoy</h2></Link>
        </div>
        </div>   
        <div>
            <button className="logout" onClick={clearText}>Log out</button>
        </div> 
    </div>
    </>
)
}
export default Account;