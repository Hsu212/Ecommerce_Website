import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

// Import mockProducts from App.tsx (shared data)
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
  { id: 3, image: 'https://www.ikea.com/global/en/images/PH_206781_6363174477.jpg?f=xl', alt: 'Furniture Slide 3' },
  ];

  // Filter sales products (same logic as Sales.tsx)
  const salesProducts = mockProducts.filter(p => p.discountPercent && p.discountPercent > 0);

  // Dummy addToCart – not used here (cards are static)
  const addToCart = () => {};

  return (
    <div className="home">
      {/* Intro */}
      <section className="intro">
        <h1>Welcome to Furniture Store</h1>
        <p>Discover stylish, high-quality furniture to transform your home. From modern sofas to elegant dining tables, we have everything to create your dream space.</p>
      </section>

      {/* Image Carousel */}
      <Slider {...settings} className="home-carousel">
  {slides.map((slide) => {
    // Define text for ALL slides
    let overlay = null;
    if (slide.id === 1) {
      overlay = {
        title: "New Arrivals",
        subtitle: "Fresh styles for modern living",
        cta: "Explore Now",
        link: "/products"
      };
    } else if (slide.id === 2) {
      overlay = {
        title: "Cozy Comfort",
        subtitle: "Relax in style with our latest collections",
        cta: "Discover More",
        link: "/products"
      };
    } else if (slide.id === 3) {
      overlay = {
        title: "Flash Sale",
        subtitle: "Up to 50% off on selected items",
        cta: "Shop Now",
        link: "/sales"
      };
    }

    return (
      <div key={slide.id} className="carousel-slide">
        <img src={slide.image} alt={slide.alt} className="carousel-image" />
        
        {overlay && (
          <div className="carousel-overlay">
            <h2 className="carousel-title">{overlay.title}</h2>
            <p className="carousel-subtitle">{overlay.subtitle}</p>
            <Link to={overlay.link} className="carousel-cta">
              {overlay.cta}
            </Link>
          </div>
        )}
      </div>
    );
  })}
</Slider>

      {/* Sales Section – NEW */}
      <section className="home-sales">
        <div className="sales-header">
          <h2>Flash Sale</h2>
          <Link to="/sales" className="view-all-link">
            View All
          </Link>
        </div>

        {salesProducts.length === 0 ? (
          <p className="no-sales">No products on sale right now.</p>
        ) : (
          <div className="sales-product-list">
            {salesProducts.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;