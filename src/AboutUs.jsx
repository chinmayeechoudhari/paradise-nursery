import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <main className="page-wrap about-page">
      <p className="eyebrow">OUR STORY</p>
      <h1>Helping your home grow greener</h1>
      <p className="lead">Paradise Nursery believes every home can feel a little more alive with plants.</p>
      <section className="about-panel">
        <h2>Who we are</h2>
        <p>We are a friendly online plant shop offering thoughtfully selected houseplants for beginners and experienced plant lovers alike.</p>
        <h2>Our mission</h2>
        <p>Our mission is to make indoor gardening approachable by offering a varied selection of plants and simple information to help customers choose the right plant for their space.</p>
        <h2>Why houseplants?</h2>
        <p>Plants add natural color and texture to a room and can make a space feel welcoming. We encourage every customer to learn each plant's light and watering needs so it can thrive.</p>
        <Link className="primary-button" to="/plants">Explore our plants</Link>
      </section>
    </main>
  );
}