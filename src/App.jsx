import React from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "./CartSlice.jsx";
import AboutUs from "./AboutUs.jsx";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";
import "./App.css";

function Navbar() {
  const cartCount = useSelector(selectCartCount);
  return (
    <header className="navbar">
      <Link className="brand" to="/" aria-label="Paradise Nursery home">🌿 Paradise Nursery</Link>
      <nav aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-nav">Cart <span className="cart-count">{cartCount}</span></NavLink>
      </nav>
    </header>
  );
}

function LandingPage() {
  return (
    <main className="hero">
      <div className="hero-card">
        <p className="eyebrow">BRING NATURE HOME</p>
        <h1>Paradise Nursery</h1>
        <p className="hero-copy">Find your perfect green companion. Explore easy-care houseplants that bring life, calm, and color to your space.</p>
        <Link className="primary-button" to="/plants">Get Started</Link>
        <Link className="text-link" to="/about">Learn about us →</Link>
      </div>
    </main>
  );
}

function NotFound() {
  return <main className="page-wrap"><h1>Page not found</h1><Link to="/">Return home</Link></main>;
}

export default function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";
  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="footer">© {new Date().getFullYear()} Paradise Nursery · Grow a little happiness.</footer>
    </>
  );
}