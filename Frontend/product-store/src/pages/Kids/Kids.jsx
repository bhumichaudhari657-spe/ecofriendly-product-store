import KidsImg from "./KidsImg";
import { FilterProvider} from "../../components/FilterContext";
import Products from "../../components/Products/Products";
import Sidebar from "../../components/Sidebar/Sidebar";
import kidsData from "../../db/kidsData";

function Kids(){

    const brands =["All Products","Green Sprouts","Eco-Kids","Badger Balm","PlanToys"];

    return(
        <>
        <KidsImg/>
        <div className="beauty-container">
        <Sidebar/>
        <div className="right-comp">
        <Products  products={kidsData} brands={brands}/>
        </div>
        </div>
        </>
    )
}
export default Kids;