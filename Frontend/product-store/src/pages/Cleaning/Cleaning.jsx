import CleanImage from "./CleanImage";
import { FilterProvider} from "../../components/FilterContext";
import Products from "../../components/Products/Products";
import Sidebar from "../../components/Sidebar/Sidebar";
import cleanData from "../../db/cleanData";

function Cleaning(){

    const brands =["All Products","Meliora","Full Circle Home","Earthy Edith’s","Blueland"];

    return(
        <>
        <CleanImage/>
        <div className="beauty-container">
        <Sidebar/>
        <div className="right-comp">
        <Products  products={cleanData} brands={brands}/>
        </div>
        </div>
        </>
    )
}
export default Cleaning;