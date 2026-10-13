import Hero from './Hero.jsx';
import Products from '../../components/Products/Products.jsx'
import data from '../../db/data.js'
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './Beauty.css';
import { useState } from 'react';
import {FilterProvider} from "../../components/FilterContext.jsx";

function Beauty(){

    
  const brands =["All Products","ALLSKIN","Plaine Products","Kinfiels","Slow Botanical"];

    return(

        <>
        <Hero/>
        <div className="beauty-container">
        <Sidebar/>
        <div className="right-comp">
        <Products  products={data} brands={brands}/>
        </div>
        </div>
        </>
    )
}
export default Beauty;