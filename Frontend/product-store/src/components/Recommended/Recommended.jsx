import './Recommended.css';
import { useFilter } from '../FilterContext.jsx' 
const Recommended=({brands})=>{
    const {setSelectedCompany} =useFilter();
    return(
        <>
        <div className="recommended-box">
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
        {
            brands.map((brand,index)=>(
                
                <button className='rbtn' key={index} onClick={()=>setSelectedCompany(brand)}>{brand}</button>
            ))
        }

        
        </div>
        
        </div>
        </>
    )
}
export default Recommended;