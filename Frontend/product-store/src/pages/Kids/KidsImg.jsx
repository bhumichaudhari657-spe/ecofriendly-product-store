import kidsImg from './kidsImg.webp';
import '../Cleaning/CleanImage';
function KidsImg(){
    return(
        <>
        <div className="cleanImg-container">
            <img src={kidsImg }className="clean-img" />
            <div className='cmsg'>
            <h1 className="heading"></h1>
            </div>
        </div>
        </>

        
    )
}
export default KidsImg;