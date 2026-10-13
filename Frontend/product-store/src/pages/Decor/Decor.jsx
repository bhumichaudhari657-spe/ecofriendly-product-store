import DecorImg from "./DecorImg";
import { FilterProvider} from "../../components/FilterContext";
import Products from "../../components/Products/Products";
import Sidebar from "../../components/Sidebar/Sidebar";
import decor from "../../db/decor";

function Decor(){

    const brands =["All Products","Green Decor","Eco Textiles","Green Lighting","Nature Craft","Eco Planters"];

    return(
        <>
        <DecorImg/>
        <div className="beauty-container">
        <Sidebar/>
        <div className="right-comp">
        <Products  products={decor} brands={brands}/>
        </div>
        </div>
        </>
    )
}
export default Decor;