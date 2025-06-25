import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Listings.css';

const dummyListings = [
  { img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", title: "Modern Villa in Beverly Hills", price: "$9,500,000", beds: 6, baths: 8 },
  { img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80", title: "Seaside Estate Malibu", price: "$12,300,000", beds: 8, baths: 10 },
  { img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80", title: "Luxury Condo Downtown", price: "$3,200,000", beds: 3, baths: 4 },
  { img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80", title: "Classic Mansion", price: "$15,000,000", beds: 10, baths: 12 },
];

const Listings = () => (
  <section className="listings" id="listings">
    <h2 data-aos="fade-up">Featured Listings</h2>
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={40}
      slidesPerView={2}
      breakpoints={{
        900: { slidesPerView: 2 },
        500: { slidesPerView: 1 }
      }}
      className="listings-swiper"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {dummyListings.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="listing-card">
            <img src={item.img} alt={item.title} />
            <div className="listing-details">
              <h3>{item.title}</h3>
              <p>{item.price} • {item.beds}bd / {item.baths}ba</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Listings;
