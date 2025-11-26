import React, { useRef, useState, useEffect } from 'react';
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
  const newArrivalsRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // State to control arrow visibility
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollToNewArrivals = () => {
    newArrivalsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // ------------------ NEW ARRIVALS & SALES DATA ------------------
  const salesProducts = mockProducts.filter(p => p.discountPercent && p.discountPercent > 0);

  const newArrivals = [...mockProducts]
    .sort((a, b) => b.id - a.id)
    .slice(0, 8);

  // ------------------ SCROLL HANDLER ------------------
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const atStart = scrollLeft <= 10;
    const atEnd = Math.abs(scrollWidth - clientWidth - scrollLeft) <= 10;

    setCanScrollLeft(!atStart);
    setCanScrollRight(!atEnd);
  };

  // Run on mount and whenever newArrivals length changes
  useEffect(() => {
    handleScroll();
  }, [newArrivals.length]);

  // ------------------ CAROUSEL SETTINGS ------------------
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

  const addToCart = () => {};

  return (
    <div className="home">
      {/* ==================== CAROUSEL ==================== */}
      <Slider {...settings} className="home-carousel">
        {slides.map((slide, index) => {
          const isFirstSlide = index === 0;
          const overlayData = {
            1: { title: "New Arrivals", subtitle: "Fresh styles for modern living", cta: "Explore Now", scroll: true },
            2: { title: "Cozy Comfort", subtitle: "Relax in style with our latest collections", cta: "Discover More", link: "/products" },
            3: { title: "Flash Sale", subtitle: "Up to 50% off on selected items", cta: "Shop Now", link: "/sales" },
          }[slide.id];

          return (
            <div key={slide.id} className="carousel-slide">
              <img src={slide.image} alt={slide.alt} className="carousel-image" />

              {isFirstSlide && (
                <div className="intro-on-clear">
                  <h1>Crafted for life</h1>
                </div>
              )}

              <div className="carousel-overlay">
                {overlayData && (
                  <div className="slide-content">
                    <h2 className="carousel-title">{overlayData.title}</h2>
                    <p className="carousel-subtitle">{overlayData.subtitle}</p>

                    {overlayData.scroll ? (
                      <button onClick={scrollToNewArrivals} className="carousel-cta">
                        {overlayData.cta}
                      </button>
                    ) : (
                      <Link to={overlayData.link!} className="carousel-cta">
                        {overlayData.cta}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </Slider>

      {/* ==================== NEW ARRIVALS SECTION ==================== */}
      <section className="home-new-arrivals" ref={newArrivalsRef}>
        <div className="new-arrivals-header">
          <h2>New Arrivals</h2>
          <Link to="/products" className="view-all-link">View All</Link>
        </div>

        <div className="new-arrivals-wrapper">
          {/* Left Arrow */}
          <button
            onClick={() => scrollContainerRef.current?.scrollBy({ left: -600, behavior: 'smooth' })}
            className={`scroll-arrow left-arrow ${canScrollLeft ? '' : 'hidden'}`}
            aria-label="Scroll left"
          >
            ←
          </button>

          {/* Scrollable Product List */}
          <div
            className="new-arrivals-list"
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollContainerRef.current?.scrollBy({ left: 600, behavior: 'smooth' })}
            className={`scroll-arrow right-arrow ${canScrollRight ? '' : 'hidden'}`}
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </section>

      {/* ==================== VIDEOS ==================== */}
      <section className="home-videos">
        <div className="video-showcase">
          <div className="video-item">
            <video autoPlay loop muted playsInline className="showcase-video" poster="https://via.placeholder.com/1920x1080/111?text=Loading...">
              <source src={IntroVideo1} type="video/mp4" />
              Your browser does not support video.
            </video>
            <div className="video-overlay-text">
              <h2>Designed for Real Life</h2>
              <p>Affordable furniture that fits your home and your budget</p>
            </div>
          </div>
          <div className="video-item">
            <video autoPlay loop muted playsInline className="showcase-video">
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

      {/* ==================== FLASH SALE ==================== */}
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
