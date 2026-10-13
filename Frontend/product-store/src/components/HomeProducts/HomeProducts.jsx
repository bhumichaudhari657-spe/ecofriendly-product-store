import './HomeProducts.css';
import homeProducts from '../../db/homeProducts';
import Card from '../Card/Card';
import { useFilter } from '../FilterContext';


function HomeProducts()
{
    const{searchTerm,setSearchTerm} = useFilter();

    const filteredProducts = homeProducts.filter((item)=>{
        return(
          (!searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      });
    return(
        <>
         <div >
         <h4 className="homeproduct-h4">Shop Eco-Friendly Brands & Products</h4>
        <section className="home-product-container">
        {
        filteredProducts.map((product, idx) => (
             <Card key={product.id} product={product} category={product.category}/>
      ))}
        </section>
        </div>

        </>
    )

}
export default HomeProducts;