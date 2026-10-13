import './HomeDisplay.css';
import { Link } from 'react-router-dom';
function HomeDisplay(){
    return(
        <>
        <div className="homeDisplay-container">
            <div className="homeDisplay-heading">
                <h1>Take the next step toward a sustainable lifestyle:</h1>
            </div>
            <div className="homeDisplay-images-container">
                <div className="offer-div">
                <div className="link-div">
                            <div className="offer-overlay">
                                <h3>Set it. Forget it. Save big</h3>
                                <h1 className="offer-text-h1"> 20% Off Subscriptions Starts Now</h1>
                                <h3>Subscribe & Save</h3>
                            </div>
                            <img src="/HomeImages/offer.webp"className="offer"/>
                        </div>
                   
                </div>
                
                    <div className="img-collage">
                        <Link to='/Decor'> 
                        <div className="link-div">
                            <div className="link-overlay">
                                <h3 className="link-text">Decorate with purpose <br/> Live with Care!</h3>
                            </div>
                            <img src="/HomeImages/decor.jpg"className="beauty-img"/>
                        </div>
                        </Link>
                        <Link to='/Kids'>
                        <div className="link-div">
                            <div className="link-overlay">
                                <h3 className="link-text">Natural and Sustainable Products For Every Conscious Parent </h3>
                            </div>
                            <img src="/HomeImages/kids.webp"className="beauty-img"/>
                        </div>
                        </Link>

                        <Link to='/Cleaning'>
                        <div className="link-div">
                            <div className="link-overlay">
                                <h3 className="link-text">Plastic & Toxins Lurk in Your Detergent <br/>Make the Non-Toxic Switch</h3>
                            </div>
                            <img src="/HomeImages/cleaning.webp"className="beauty-img"/>
                        </div>
                        </Link>

                        <Link to='/Beauty'>
                        <div className="link-div">
                            <div className="link-overlay">
                                <h3 className="link-text">Skincare must be good enough to eat! </h3>
                            </div>
                            <img src="/HomeImages/beauty.webp"className="beauty-img"/>
                        </div>
                        </Link>


                    </div>
                
            </div>
        </div>
        </>
    )
}
export default HomeDisplay;