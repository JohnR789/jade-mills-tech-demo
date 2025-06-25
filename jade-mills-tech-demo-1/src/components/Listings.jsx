import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Listings.css';

const dummyListings = [
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Maplewood Retreat",
    price: "$799,000",
    beds: 4,
    baths: 3.5,
    description: "Cozy craftsman nestled among brilliant autumn foliage, just steps from woodland trails.",
  },
  {
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    title: "Harvest Hill Estate",
    price: "$1,550,000",
    beds: 5,
    baths: 5,
    description: "Elegant stone home with pumpkin-hued accents, sweeping lawns, and a classic red barn.",
  },
  {
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
    title: "Chestnut Lane Cottage",
    price: "$520,000",
    beds: 3,
    baths: 2,
    description: "Charming cottage with wraparound porch, perfect for sipping cider on crisp mornings.",
  },
  {
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    title: "Amber Pines Residence",
    price: "$1,120,000",
    beds: 4,
    baths: 4,
    description: "Modern, airy design with floor-to-ceiling windows overlooking golden pine groves.",
  },
  {
    img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
    title: "Oakridge Colonial",
    price: "$940,000",
    beds: 5,
    baths: 3,
    description: "Classic colonial updated for modern living, surrounded by vibrant fall landscapes.",
  },
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
              <p style={{ fontSize: '0.97em', color: '#7d5b38', marginTop: '0.5em' }}>{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Listings;

