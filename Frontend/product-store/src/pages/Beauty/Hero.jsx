import  heroImg from'./bimages/hero.webp';
import './Hero.css';
function Hero(){
    return(
        <>
        <div className="bcontainer">
            <img src={heroImg}className="bhero-img" />
            <div className="bmsg">
            <h1 className="heading">Beauty & Care Supplies</h1>
            <p>Typical beauty + care products can contain nasty toxins that are bad for your skin (and health!) but by switching to non-toxic, natural, and eco-friendly beauty products you can treat your skin, and the planet, a whole lot better. From bamboo toothbrushes to shampoo bars, Ecohoy has everything to make your routine natural. Shop recycled plastic razors, natural sponges, natural makeup, vegan hair care, organic tampons, and plastic-free lotions, salves, and sunscreens here!</p>
            </div> 
        </div>
        </>

        
    )
}
export default Hero;