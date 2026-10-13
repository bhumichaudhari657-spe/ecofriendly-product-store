import Slider from "../components/Slider fol/Slider";
import Popular from "../components/Popular Brands/Popular";
import BestSeller from "../components/Make Difference/BestSeller";
import HomeDisplay from "../components/HomeDisplay/HomeDisplay";
import HomeProducts from "../components/HomeProducts/HomeProducts";
function Home(){
    return(
        <>
        <Slider/>
        <HomeDisplay/>
        <HomeProducts/>
        <Popular/>
        <BestSeller/>
        </>
    )
}
export default Home;