import './BestSeller.css';
import Card from '../Card/Card';
import homeData from '../../db/home';
function BestSeller(){
    return(
        <>
        <div className="bestSeller-container">
            <div className="bestSeller-heading">
                <h4 className="bestSeller-h4">Shop 500+ Eco-Friendly Brands & Products</h4>
                <h1 className="bestSeller-h1">Your Choices Make a Difference:</h1>
                <h2 className="bestSeller-h2">Hero Products of Month</h2>
            </div>
            <div className="bestSeller-card-container">
                {
                    homeData.map((product)=>(
                        <Card key={product.id} product={product} category={product.category} className="home-card" />
                    ))
                    
                }
            </div>
        </div>
        </>
    )
}
export default BestSeller;