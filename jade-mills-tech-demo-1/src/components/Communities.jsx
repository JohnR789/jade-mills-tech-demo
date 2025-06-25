import React from "react";
import "./Communities.css";

const communities = [
  {
    name: "Maple Ridge",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "A charming neighborhood with tree-lined streets and classic homes nestled among fall foliage.",
  },
  {
    name: "Harvest Hill",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
    description: "Rolling hills, pumpkin patches, and spacious properties—perfect for families and quiet retreats.",
  },
  {
    name: "Golden Pines",
    img: "https://images.unsplash.com/photo-1509228468518-c5eeecbff44a?auto=format&fit=crop&w=600&q=80",
    description: "Modern homes set among golden pine forests, with access to walking trails and community parks.",
  },
  {
    name: "Chestnut Valley",
    img: "https://images.unsplash.com/photo-1504609813440-554e64a8e244?auto=format&fit=crop&w=600&q=80",
    description: "Picturesque valley with stone cottages and vibrant fall colors every October.",
  },
  {
    name: "Oakridge Estates",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
    description: "Elegant estate homes on large lots with mature oaks and a true neighborhood feel.",
  },
];

const Communities = () => (
  <section className="communities" id="communities">
    <h2 data-aos="fade-up">Featured Communities</h2>
    <div className="community-grid">
      {communities.map((comm, i) => (
        <div className="community-card" key={i} data-aos="fade-up" data-aos-delay={i * 70}>
          <div className="community-img-wrap">
            <img src={comm.img} alt={comm.name} />
          </div>
          <div className="community-info">
            <h3>{comm.name}</h3>
            <p>{comm.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Communities;
