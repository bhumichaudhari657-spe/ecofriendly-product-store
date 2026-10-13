import  cleaning1 from'./cleaning1.jpg';
import './CleanImage.css';
function CleanImage(){
    return(
        <>
        <div className="cleanImg-container">
            <img src={cleaning1}className="clean-img" />
            <div className='cmsg'>
            <h1 className="heading">Cleaning Supplies</h1>
            </div>
        </div>
        </>

        
    )
}
export default CleanImage;