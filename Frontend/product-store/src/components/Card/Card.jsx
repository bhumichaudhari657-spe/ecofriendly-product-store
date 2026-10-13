import { Star, Heart } from 'lucide-react';
import './Card.css';
import { useNavigate } from "react-router-dom";

function Card({ product, category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Subcard/${category}/${product.id}`);
  };
  const renderStars = () => {
    const stars = [];
    const rating = product.star || 0; 

    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        
        stars.push(<Star key={i} fill="#E1AD01" stroke="#E1AD01" />);
      } else if (i < rating) {
        
        stars.push(<Star key={i} fill="url(#half)" stroke="black" />);
      } else {
        
        stars.push(<Star key={i} fill="none" stroke="black" />);
      }
    }

    return stars;
  };

  return (
    <>
      <section className="card" onClick={handleClick}>
        <img src={product.image} className="card-img" alt="img" />
        <div className="card-detaitls">
          <h3 className="card-title">{product.title}</h3>

          <section className="card-reviews">
            {renderStars()}

            <span className="total-reviews">({product.reviews || 0})</span>
          </section>

          <section className="card-price">
            {product.prevPrice && <del>₹{product.prevPrice}</del>} ₹{product.newPrice}
            <div className="like">
              <Heart />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Card;