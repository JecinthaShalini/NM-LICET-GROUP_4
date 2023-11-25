// OrderManagement.js
import React, { useState, useEffect } from 'react';
import Order from './Order';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  // Simulate fetching orders from an API
  useEffect(() => {
    // Replace this with actual API call
    const fetchOrders = async () => {
      // Fetch orders and set them using setOrders
      const fetchedOrders = await fetchOrdersFromApi();
      setOrders(fetchedOrders);
    };

    fetchOrders();
  }, []); // Empty dependency array to run the effect once when the component mounts

  return (
    <div className="order-management">
      <h2>Order Management</h2>
      <div className="order-list">
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

// Simulate fetching orders from an API
const fetchOrdersFromApi = () => {
  return new Promise((resolve) => {
    // Simulated delay to mimic API call
    setTimeout(() => {
      const orders = [
        { id: 1, status: 'Pending' },
        { id: 2, status: 'Delivered' },
        // Add more orders as needed
      ];
      resolve(orders);
    }, 1000);
  });
};

export default OrderManagement;
