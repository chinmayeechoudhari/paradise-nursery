import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotal
} from "./CartSlice.jsx";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <main className="page-wrap">
      <div className="cart-heading">
        <div>
          <p className="eyebrow">YOUR SELECTION</p>
          <h1>Shopping Cart</h1>
        </div>
        <Link className="secondary-button" to="/plants">← Continue Shopping</Link>
      </div>

      {items.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-icon">🪴</div>
          <h2>Your cart is empty</h2>
          <p>Find a plant that makes your space feel like home.</p>
          <Link className="primary-button" to="/plants">Browse Plants</Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-list" aria-label="Cart items">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} onError={(event) => { event.currentTarget.src = "https://placehold.co/200x200/e5eee5/244c35?text=Plant"; }} />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <div className="quantity-row">
                    <span>Quantity</span>
                    <button className="quantity-button" aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity <= 1}>−</button>
                    <strong>{item.quantity}</strong>
                    <button className="quantity-button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                  <button className="delete-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove item</button>
                </div>
                <strong className="item-subtotal">${(item.price * item.quantity).toFixed(2)}</strong>
              </article>
            ))}
          </section>

          <aside className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-line"><span>Items</span><span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span></div>
            <div className="summary-line total-line"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
            <button className="primary-button checkout-button" onClick={() => window.alert("Checkout is coming soon!")}>Checkout</button>
            <p className="fine-print">Shipping and taxes, if applicable, are calculated at checkout.</p>
          </aside>
        </div>
      )}
    </main>
  );
}