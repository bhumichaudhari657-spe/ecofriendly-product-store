import decorImg from './decorImg.jpg';
import '../Cleaning/CleanImage';
function DecorImg(){
    return(
        <>
        <div className="cleanImg-container">
            <img src={decorImg }className="clean-img" />
            <div className='cmsg'>
            <h1 className="heading">Decor Supplies</h1>
            </div>
        </div>
        </>

        
    )
}
export default DecorImg;