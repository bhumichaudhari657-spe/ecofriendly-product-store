import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Contibuy.css';
function Contibuy() {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate(-3); // go to product listing
  };

  const handleContiBuyNow=()=>{
    navigate("/BuyNow" , {state : {checkoutType: 'single'}});
    console.log(`Buying ${product.title}`);
  }
  return (
    <div className="maindiv">
      <div className="card1">
        <div className="tickicon">✅</div>
        <h2>Account Created Successfully!</h2>
        <p>You are now logged in. What would you like to do next?</p>
        <div className="buttonGroup">
          <button className="continueBtn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
         <button className="buyBtn" onClick={handleContiBuyNow} >
           Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
export default Contibuy;