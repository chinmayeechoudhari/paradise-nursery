import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "./CartSlice.jsx";

const categories = [
  {
    name: "Air-Purifying Plants",
    plants: [
      { id: "peace-lily", name: "Peace Lily", price: 18, image: "https://images.unsplash.com/photo-1593691502300-3f5e7c1f1f1a?auto=format&fit=crop&w=700&q=80", description: "Elegant green leaves and white blooms." },
      { id: "snake-plant", name: "Snake Plant", price: 22, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b70?auto=format&fit=crop&w=700&q=80", description: "A striking, low-maintenance favorite." },
      { id: "spider-plant", name: "Spider Plant", price: 14, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80", description: "Arching leaves that brighten a shelf." },
      { id: "areca-palm", name: "Areca Palm", price: 28, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=80", description: "A tropical touch for bright rooms." },
      { id: "rubber-plant", name: "Rubber Plant", price: 26, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80", description: "Glossy leaves with a bold silhouette." },
      { id: "boston-fern", name: "Boston Fern", price: 16, image: "https://images.unsplash.com/photo-1597055181300-a8f4f3e4e8e0?auto=format&fit=crop&w=700&q=80", description: "Soft, feathery foliage for humid spots." }
    ]
  },
  {
    name: "Succulents & Cacti",
    plants: [
      { id: "aloe-vera", name: "Aloe Vera", price: 12, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80", description: "A sculptural succulent for sunny windows." },
      { id: "jade-plant", name: "Jade Plant", price: 15, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80", description: "Rounded leaves and a compact shape." },
      { id: "echeveria", name: "Echeveria", price: 10, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=700&q=80", description: "A rosette-shaped succulent." },
      { id: "zebra-haworthia", name: "Zebra Haworthia", price: 11, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80", description: "Compact leaves with pale stripes." },
      { id: "moon-cactus", name: "Moon Cactus", price: 9, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80", description: "A colorful little cactus for a desk." },
      { id: "string-pearls", name: "String of Pearls", price: 17, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80", description: "Trailing bead-like leaves for hanging pots." }
    ]
  },
  {
    name: "Foliage Favorites",
    plants: [
      { id: "monstera", name: "Monstera Deliciosa", price: 30, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80", description: "Iconic split leaves with tropical character." },
      { id: "golden-pothos", name: "Golden Pothos", price: 13, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80", description: "A forgiving trailing plant for beginners." },
      { id: "zz-plant", name: "ZZ Plant", price: 21, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80", description: "Shiny, upright leaves and easy care." },
      { id: "calathea", name: "Calathea", price: 24, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80", description: "Decorative patterned leaves." },
      { id: "philodendron", name: "Heartleaf Philodendron", price: 16, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80", description: "Heart-shaped leaves that trail beautifully." },
      { id: "parlor-palm", name: "Parlor Palm", price: 19, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=80", description: "A graceful palm for indoor corners." }
    ]
  }
];

function PlantCard({ plant, added, onAdd }) {
  return (
    <article className="plant-card">
      <img src={plant.image} alt={plant.name} loading="lazy" onError={(event) => { event.currentTarget.src = "https://placehold.co/600x450/e5eee5/244c35?text=Houseplant"; }} />
      <div className="plant-info">
        <h3>{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
        <div className="plant-card-bottom">
          <strong>${plant.price.toFixed(2)}</strong>
          <button className="primary-button small-button" onClick={() => onAdd(plant)} disabled={added}>
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="page-wrap">
      <section className="catalog-heading">
        <p className="eyebrow">FIND YOUR GREEN COMPANION</p>
        <h1>Shop Houseplants</h1>
        <p className="lead">Choose a plant to bring a little more nature into your home.</p>
      </section>
      {categories.map((category) => (
        <section className="plant-category" key={category.name}>
          <h2>{category.name}</h2>
          <div className="plant-grid">
            {category.plants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                added={cartIds.has(plant.id)}
                onAdd={(selectedPlant) => dispatch(addToCart(selectedPlant))}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}