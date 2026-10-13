import './Sustainability.css';
import { useFilter } from '../FilterContext';

function Sustainability(){

    const {setSelectedSustainability} =useFilter();
    return(
        <>
        <div >
            <h1 className="sidebar-title">Sustainability</h1>
            <div className="checkbox-feild">
            <h2 className="check-text">
                    <input type="radio" name="test1"  onChange={()=> setSelectedSustainability("all")}/> All
                </h2>
                 <h2 className="check-text">
                    <input type="radio" name="test1"  onChange={()=> setSelectedSustainability(100)}/> 100% Organic
                </h2>
                 <h2 className="check-text">
                     <input type="radio"  name="test1"  onChange={()=> setSelectedSustainability(75)}/>At least 70% Organic
                     </h2>
                <h2 className="check-text">
                    <input type="radio" name="test1"  onChange={()=> setSelectedSustainability(90)}/>  At least 95% Organic
                    </h2>
             
            </div>
        </div>
        </>
    )
}
export default Sustainability;