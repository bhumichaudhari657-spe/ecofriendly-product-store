import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar/Nav1';
import OrganicFood from './pages/Organic Food/OrganicFood';
import Decor from './pages/Decor/Decor';
import Kids from './pages/Kids/Kids';
import Beauty from './pages/Beauty/Beauty';
import Cleaning from './pages/Cleaning/Cleaning';
import Login from './pages/UserInfo/Login';
import Account from './pages/UserInfo/Account' ;
import AlreadyAcc from './pages/UserInfo/AlreadyAcc';
import Registration from './pages/UserInfo/Registration';
import Subcard from './components/Subcard/Subcard';
import Home from './pages/Home';
import Contibuy from './pages/UserInfo/Contibuy';
import Buynow from './pages/UserInfo/Buynow';
import './App.css';
import { FilterProvider } from './components/FilterContext';
import Footers from './components/Footer/Footers';
import Abouts from './components/Footer/Abouts';
import Return from './components/Footer/Return';
import Privacy from './components/Footer/Privacy';
import Common from './components/Footer/Common';
import Cart from './pages/UserInfo/Cart';
import Wishlist from './pages/UserInfo/Wishlist';

function App() 
{

  return(
    <>
    <FilterProvider>
    <Navbar/>
    
    <Routes>
    <Route path="/Subcard/:category/:id" element={<Subcard/>}/>
    <Route path="/" element={<Home/>} />
    <Route path="/registration" element={<Registration/>} />
    <Route path="/Contibuy" element={<Contibuy/>} />
    <Route path="/AlreadyAcc" element={<AlreadyAcc/>}/>
    <Route path="/Buynow" element={<Buynow/>}/>
    <Route path='/Login' element={<Login/>} />
    <Route path='/Wishlist' element={<Wishlist/>}/>
    <Route path='/Account' element={<Account/>}/>
    <Route path="/OrganicFood"  element={<OrganicFood/>} />
    <Route path="/Decor"  element={<Decor/>} />
    <Route path="/Beauty"  element={<Beauty/>} />
    <Route path="/Kids"  element={<Kids/>} />
    <Route path="/Cleaning"  element={<Cleaning/>} />
    <Route path="/Abouts" element={<Abouts />} />
    <Route path="/Return" element={<Return/>}/>
    <Route path="/Privacy" element={<Privacy/>}/>
    <Route path="/Common" element={<Common/>}/>
    <Route path="/Cart" element={<Cart/>}/>

    </Routes>
    <Footers/>
     </FilterProvider> 
    </>
  )

}
 

export default App
