import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FoodItems from './data/FoodItems'; // You need to replace this with your actual data source

const App = () => {
  const [cart, setCart] = useState([]);
  const [foodItems, setFoodItems] = useState(FoodItems);
  const [search, setSearch] = useState('');

  const filterByCategory = (category) => {
    const filteredItems = FoodItems.filter((item) => item.category === category);
    setFoodItems(filteredItems);
  };

  const resetCategoryFilter = () => {
    setFoodItems(FoodItems);
  };

  const searchFoodItems = () => {
    if (search.trim() === '') {
      alert('Please enter something to search.');
      setFoodItems(FoodItems);
    } else {
      const filteredItems = FoodItems.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFoodItems(filteredItems);
    }
  };

  const addToCart = (selectedItem) => {
    const itemInCart = cart.find((item) => item.id === selectedItem.id);

    if (itemInCart) {
      alert('This item is already in your cart.');
    } else {
      setCart([...cart, { ...selectedItem, quantity: 1 }]);
      alert('Added to cart!');
    }
  };

  return (
    <Router>
      <Navbar search={search} setSearch={setSearch} searchHandler={searchFoodItems} />
      <Routes
        foodItems={foodItems}
        addToCart={addToCart}
        filterByCategory={filterByCategory}
        resetCategoryFilter={resetCategoryFilter}
      />
      <Footer />
    </Router>
  );
};

export default App;
