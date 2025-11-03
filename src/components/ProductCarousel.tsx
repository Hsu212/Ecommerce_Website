import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ProductCarousel.css';

// Sample products with placeholder image sources
const products = [
  {
    id: 1,
    name: 'Modern Sofa',
    description: 'A sleek, comfortable sofa perfect for contemporary living rooms.',
    image: '#',
  },
  {
    id: 2,
    name: 'Wooden Dining Table',
    description: 'A sturdy dining table crafted from high-quality oak.',
    image: '#',
  },
  {
    id: 3,
    name: 'Cozy Armchair',
    description: 'A plush armchair ideal for relaxing evenings.',
    image: '#',
  },
];

const ProductCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <div className="product-carousel">
      <h2>Featured Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="carousel-slide">
            <img src={product.image} alt={product.name} className="carousel-image" />
            <div className="carousel-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
