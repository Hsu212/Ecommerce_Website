import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

import IntroVideo1 from '../assets/videos/intro-1.mp4';
import IntroVideo2 from '../assets/videos/intro-2.mp4';

import { mockProducts } from '../data/mockProducts';

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
  };

  const slides = [
    { id: 1, image: 'https://www.ikea.com/global/en/images/PH_202776_a69420c69c.jpg?f=g', alt: 'Furniture Slide 1' },
    { id: 2, image: 'https://www.ikea.com/global/en/images/1_1_3d635a062f.jpg?f=g', alt: 'Furniture Slide 2' },
    { id: 3, image: 'https://www.ikea.com/global/en/images/Livingrrom_17_69973148cc_09409fc85c.jpg?f=xxl', alt: 'Furniture Slide 3' },
  ];

  const salesProducts = mockProducts.filter(p => p.discountPercent && p.discountPercent > 0);
  const addToCart = () => {};

  return (
    <div className="home">

      <Slider {...settings} className="home-carousel">
        {slides.map((slide, index) => {
          const isFirstSlide = index === 0;
          let overlay = null;
          if (slide.id === 1) overlay = { title: "New Arrivals", subtitle: "Fresh styles for modern living", cta: "Explore Now", link: "/products" };
          else if (slide.id === 2) overlay = { title: "Cozy Comfort", subtitle: "Relax in style with our latest collections", cta: "Discover More", link: "/products" };
          else if (slide.id === 3) overlay = { title: "Flash Sale", subtitle: "Up to 50% off on selected items", cta: "Shop Now", link: "/sales" };

          return (
            <div key={slide.id} className="carousel-slide">
              <img src={slide.image} alt={slide.alt} className="carousel-image" />

              {isFirstSlide && (
                <div className="intro-on-clear">
                  <h1>Crafted for life</h1>
                </div>
              )}

              <div className="carousel-overlay">
                {overlay && (
                  <div className="slide-content">
                    <h2 className="carousel-title">{overlay.title}</h2>
                    <p className="carousel-subtitle">{overlay.subtitle}</p>
                    <Link to={overlay.link} className="carousel-cta">{overlay.cta}</Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </Slider>

      <section className="home-videos">
        <div className="video-showcase">

          <div className="video-item">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="showcase-video"
              poster="https://via.placeholder.com/1920x1080/111?text=Loading..." // optional fallback image
            >
              <source src={IntroVideo1} type="video/mp4" />
              Your browser does not support video.
            </video>

            <div className="video-overlay-text">
              <h2>Designed for Real Life</h2>
              <p>Affordable furniture that fits your home and your budget</p>
            </div>
          </div>

          <div className="video-item">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="showcase-video"
            >
              <source src={IntroVideo2} type="video/mp4" />
              Your browser does not support video.
            </video>

            <div className="video-overlay-text">
              <h2>Comfort Meets Style</h2>
              <p>Create spaces you’ll love coming home to</p>
            </div>
          </div>

        </div>
      </section>

      <section className="home-sales">
        <div className="sales-header">
          <h2>Flash Sale</h2>
          <Link to="/sales" className="view-all-link">View All</Link>
        </div>

        {salesProducts.length === 0 ? (
          <p className="no-sales">No products on sale right now.</p>
        ) : (
          <div className="sales-product-list">
            {salesProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;

