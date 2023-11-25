// Order.js
import React from 'react';

const Order = ({ order }) => {
  return (
    <div className="order">
      <h3>Order #{order.id}</h3>
      <p>Status: {order.status}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default Order;
