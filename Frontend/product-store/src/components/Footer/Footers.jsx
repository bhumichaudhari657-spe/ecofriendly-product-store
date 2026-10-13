import eco from './footer-logo.png';
import easy from './easy_returns.png';
import paytm from './paytm.png';
import card from './cards-min.png';
import trust from './trusts-min.png';
import './Footers.css';
import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom'; // ✅ Import Link

function Footers() {
  return (
    <footer className="footer">
      <div className='division'></div>
     
      <div className="footer-top">
        <div className="eco">
          <img src={eco} alt="EcoHoy" />
        </div>

        <div className="footer-description">
          <p>
            Ecohoy is derived from two words: "Eco" and "Hoy". Hoy in English is used 
            to attract someone’s attention (Recall the pirate’s “Ahoy”!) and in Spanish 
            it means “Today”. We strive to divert people’s attention to the environment 
            and aim to catalyze change, not tomorrow but today and beginning now.
          </p>
        </div>

        <div className="footer-link">
          <div className='link'>
            <h4>Associates</h4>
            <Link to="/Abouts">About us</Link>
            <Link to="/Common">Work with us</Link>
            <Link to="/Common">Sell with us</Link>
            <Link to="/account">My Account</Link>
          </div>

          <div className='link'>
            <h4>Policies</h4>
            <Link to="/Common">Terms of use</Link>
            <Link to="/Privacy">Privacy policy</Link>
            <Link to="/Return">Return policy</Link>
            <Link to="/Common">Site map</Link>
          </div>

          <div className='link'>
            <h4>Useful links</h4>
            <Link to="/Common">Payment methods</Link>
            <Link to="/Common">Locations we ship to</Link>
            <Link to="/Common">Estimated delivery time</Link>
            <Link to="/Common">Blogs</Link>
          </div>
        </div>
      </div>

      <div className='footer-subscribe'>
        <input type="email" placeholder='Enter Email Address' />
        <button type="submit">SUBSCRIBE</button>
      </div>

      <div className='easy-returns'>
        <img src={easy} alt="Easy Returns" />
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaPinterestP />
          <FaLinkedinIn />
        </div>
        <div className="payment-icons">
          <img src={paytm} alt="Paytm" />
          <img src={card} alt="Cards" />
        </div>
      </div>

      <div className="footer-security">
        <img src={trust} alt="Security" />
      </div>
    </footer>
  );
}

export default Footers;
