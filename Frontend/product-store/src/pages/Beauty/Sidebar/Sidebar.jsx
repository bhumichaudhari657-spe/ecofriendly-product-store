import './Sidebar.css';
import Sustainability from '../Sustainability/Sustainability.jsx';
import ProType from './ProType/ProType.jsx';

function Sidebar(){
    return(
        <>
        <section className="sidebar">
            
            <Sustainability/>
            <ProType/>
        </section>
        </>
    )
}
export default Sidebar;