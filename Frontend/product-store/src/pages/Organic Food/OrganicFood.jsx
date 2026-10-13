
import { FilterProvider} from "../../components/FilterContext";
import Products from "../../components/Products/Products";
import Sidebar from "../../components/Sidebar/Sidebar";
import organicFood from "../../db/organicFood";
import OrganicImg from "./OrganicImg";

function OrganicFood(){

    const brands =["All Products","Pro Nature","Organic India","24 Mantra Organic","Nature's Basket","Conscious Food"];

    return(
        <>
        <OrganicImg/>
        <div className="beauty-container">
        <Sidebar/>
        <div className="right-comp">
        <Products  products={organicFood} brands={brands}/>
        </div>
        </div>
        </>
    )
}
export default OrganicFood;