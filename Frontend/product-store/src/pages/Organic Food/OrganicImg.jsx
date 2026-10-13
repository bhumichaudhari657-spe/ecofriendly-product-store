import  organicImg from'./organicImg.webp';
import '../Cleaning/CleanImage';
function OrganicImg(){
    return(
        <>
        <div className="cleanImg-container">
            <img src={organicImg}className="clean-img" />
            <div className='cmsg'>
            <h1 className="heading">Organic Food Supplies</h1>
            </div>
        </div>
        </>

        
    )
}
export default OrganicImg;