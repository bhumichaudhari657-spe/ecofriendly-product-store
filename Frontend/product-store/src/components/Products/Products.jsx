import './Products.css';
// import products from '../../db/data.js';
import {Link} from "react-router-dom";
import Card from '../Card/Card.jsx';
import Recommended from '../Recommended/Recommended.jsx'
import Sustainability from '../Sustainability/Sustainability.jsx';
import { useState } from 'react';
import { useFilter } from '../FilterContext.jsx';
import Subcard from '../Subcard/Subcard.jsx';
function Products({products , brands}){

  const{selectedCompany,selectedSustainability} = useFilter();
  const{searchTerm,setSearchTerm} = useFilter();

  const filteredProducts = products.filter((item)=>{
    return(
      (selectedCompany === "All Products"|| item.company=== selectedCompany) && 
      (selectedSustainability==="all" || item.sustainability >= selectedSustainability ) &&
      (!searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  console.log(filteredProducts);
    return(
        <>
        <div>
          <Recommended brands={brands}/>
        <section className="card-container">
        {
        filteredProducts.map((product, idx) => (
          // <Link to={`/Subcard/${product.id}`} className="product-link" >
             <Card key={product.id} product={product} category={product.category}/>
          // </Link>
       
      ))}
        </section>
        </div>
        </>
    )

}
export default Products;
