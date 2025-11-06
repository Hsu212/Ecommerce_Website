import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ProductCarousel.css';

const products = [
  {
    id: 1,
    name: 'Modern Sofa',
    description: 'A sleek, comfortable sofa perfect for contemporary living rooms.',
    image: 'https://www.ikea.com/us/en/images/products/uppland-sofa-blekinge-white__0818565_pe774487_s5.jpg?f=xl',
  },
  {
    id: 2,
    name: 'Wooden Dining Table',
    description: 'A sturdy dining table crafted from high-quality oak.',
    image: 'https://www.ikea.com/us/en/images/products/tonstad-table-brown-stained-oak-veneer__1393503_pe966259_s5.jpg?f=xl',
  },
  {
    id: 3,
    name: 'Cozy Armchair',
    description: 'A plush armchair ideal for relaxing evenings.',
    image: 'https://www.ikea.com/us/en/images/products/stockholm-2025-pendant-lamp-glass-brass-plated__1285162_pe933235_s5.jpg?f=xl',
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