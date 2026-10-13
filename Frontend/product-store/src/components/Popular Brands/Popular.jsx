import './Popular.css';

function Popular(){
    return(
        <>
        <div className="popular-container">
            <div className="popular-heading">
                <h4 className="popular-h4"> Vetted. Valued. Trusted</h4>
                <h1 className="popular-h1">Shop Popular Brands:</h1>
            </div>
            <div className="popular-images">
                <img src='/HomeImages/zws.avif' className="p-image"/>
                <img src='/HomeImages/teracycle.avif' className="p-image"/>
                <img src='/HomeImages/dopps.avif' className="p-image"/>
                <img src='/HomeImages/biobag.avif' className="p-image"/>
                <img src='/HomeImages/Bumbleride.avif' className="p-image"/>
                <img src='/HomeImages/unpaste.avif' className="p-image"/>
            </div>
        </div>
        
        </>
    )
}
export default Popular;