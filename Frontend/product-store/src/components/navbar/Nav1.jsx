import './Nav.css';
import logo from './logo-ecohoy.png';
import searchLogo from './magnifying-glass.png';
// import user from './user.png';
import trolley from './trolley.png';
import heart from './images.png';
import { NavLink,Link } from 'react-router-dom';
import { Home,LockIcon, Heart, ShoppingCart ,User} from 'lucide-react';
import { useFilter } from '../FilterContext';
import { useNavigate } from 'react-router-dom';
import Cart  from '../../pages/UserInfo/Cart';
function Navbar() {
    const {searchTerm,setSearchTerm}= useFilter();


    const { isLoggedIn,isSignUp} = useFilter();
const navigate = useNavigate();

const handleUser = () => {
  if (!isLoggedIn) {
    // setPendingAction({ type: "cart", productId: product.id });
    navigate("/Login");
  } else if(!isSignUp){
    navigate("/Registration");
  }
  else{
    navigate("/Contibuy")
    
  }
};
    return (
        <>
            <nav className="navbar">
                <div className="part1">
                    <Link to='/' ><Home color="white" size={32} className="home-icon" /></Link>
                    <div className="logo"><img src={logo} /></div>
                    <div className="search-bar">
                        <img src={searchLogo} className="search-icon" />
                        <input type="text" placeholder="What are you looking for?" className="search-input"
                        value={searchTerm} onChange={(e)=>{
                            setSearchTerm(e.target.value);
                        }}/> 
                    </div>
                    <div className="user-op-parent">
                        {/* <p>&#129293;</p> */}

                       <LockIcon className="icon" color="white" onClick={handleUser}size={32}/>
                        <Link to='/Wishlist' ><Heart color="white" size={32} className="icon"/></Link>
                        <Link to='/Cart'><ShoppingCart color="white" size={32} className="icon"/></Link> 
                        <Link to='/Account'><User color="white" size={32} className='icon/'/></Link>
                    </div>
                </div>
                <div className="part2">
                    <div className="nav">
                        <NavLink to='/OrganicFood' className="nav-links">Organic Food</NavLink>
                        <NavLink to='/Decor' className="nav-links">Kitchen & Decor</NavLink>
                        <NavLink to='/Beauty' className="nav-links">Beauty</NavLink>
                        <NavLink to='/Kids' className="nav-links">Kids</NavLink>
                        <NavLink to='/Cleaning' className="nav-links">Cleaning</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )


}
export default Navbar