import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Home.css';

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    { id: 1, image: 'https://www.ikea.com/global/en/images/PH_202776_a69420c69c.jpg?f=g', alt: 'Furniture Slide 1' },
    { id: 2, image: 'https://www.ikea.com/global/en/images/1_1_3d635a062f.jpg?f=g', alt: 'Furniture Slide 2' },
    { id: 3, image: 'https://www.ikea.com/global/en/images/PH_206781_6363174477.jpg?f=xl', alt: 'Furniture Slide 3' },
  ];

  return (
    <div className="home">
      <section className="intro">
        <h1>Welcome to Furniture Store</h1>
        <p>Discover stylish, high-quality furniture to transform your home. From modern sofas to elegant dining tables, we have everything to create your dream space.</p>
      </section>
      <Slider {...settings} className="home-carousel">
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide">
            <img src={slide.image} alt={slide.alt} className="carousel-image" />
            <Link to="/products" className="shop-now-button">
              Shop Now
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
