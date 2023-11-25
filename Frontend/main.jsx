import React from 'react';
import './styles.css'; // Import your CSS file
import image1 from '.Users/rjeff/Documents/Public/images/1.jpg'; // Import your images
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4a.jpg';
import image5 from './5.jpg';
import image6 from './6.jpg';
import image7 from './7.jpg';
import image8 from './8.jpg';
import image9 from './9.jpg';
import image10 from './10.jpg';
import image11 from './11.jpg';

const MainPage = () => {
  return (
    <div className="container">
      <header>
        <div className="header-doodle"></div>
        <h1>
          <span className="highlight">𝚃</span>atli
          <span className="highlight">𝙹</span>ūbako
          <span className="highlight">𝙼</span>akanan
        </h1>
        <h2>Food Delivery</h2>
        <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li>
            <a href="customer-interface.html">Customer Interface</a>
            <ul class="submenu">
              <li><a href="#order">Order Placement</a></li>
              <li><a href="#tracking">Real-Time Tracking</a></li>
              <li><a href="#feedback">Feedback and Ratings</a></li>
            </ul>
          </li>
          <li>
            <a href="restaurant-interface.html">Restaurant Interface</a>
            <ul class="submenu">
              <li><a href="#orderManagement">Order Management</a></li>
              <li><a href="#feedbackReview">Feedback Review</a></li>
            </ul>
          </li>
          <li>
            <a href="delivery-interface.html">Delivery Personnel Interface</a>
            <ul class="submenu">
              <li><a href="#orderAssignment">Order Assignment</a></li>
              <li><a href="#statusUpdates">Status Updates</a></li>
            </ul>
          </li>
          <li>
            <a href="admin-interface.html">Administrator Interface</a>
            <ul class="submenu">
              <li><a href="#userManagement">User Management</a></li>
              <li><a href="#performanceMonitoring">Performance Monitoring</a></li>
            </ul>
          </li>
          <li><a href="guide.html">User Guide</a></li>
        </ul>
      </nav>
    </header>
      {/* Main Content Section */}
      <main>
        <section id="hero">
          <div className="container">
            <div className="slider">
              <img src={image1} alt="Delicious Food" className="hero-image" />
              <img src={image2} alt="Delicious Food" className="hero-image" />
              <img src={image3} alt="Delicious Food" className="hero-image" />
              <img src={image4} alt="Delicious Food" className="hero-image" />
              <img src={image5} alt="Delicious Food" className="hero-image" />
              <img src={image6} alt="Delicious Food" className="hero-image" />
              <img src={image7} alt="Delicious Food" className="hero-image" />
            </div>
            <h2>Delicious Food, Delivered to Your Doorstep</h2>
            <p>Order from your favorite restaurants and enjoy a hassle-free delivery experience.</p>
            <a href="customer-interface.html" className="cta-button">
              Order Now
            </a>
          </div>
        </section>
        <section id="features">
      <div class="container">
        <h2>Key Features</h2>
        <div class="feature">
          <img src={image8} alt="Real-Time Tracking" class="feature-image">
          <h3>Real-Time Tracking</h3>
          
          <p class="p1">Track your order in real-time from the restaurant to your doorstep.</p>
        </div>
        <div class="feature">
          <img src={image9} alt="Feedback and Ratings" class="feature-image">
          <h3>Feedback and Ratings</h3>
          <p class="p1">Provide feedback and ratings to help us improve our service.</p>
        </div>
        <div class="feature">
          <img src={image10} alt="Efficient Order Management" class="feature-image">
          <h3>Efficient Order Management</h3>
          <p class="p1">Restaurants can manage orders seamlessly with our intuitive system.</p>
        </div>
        <div class="feature">
          <img src={image11} alt="Proactive System Monitoring" class="feature-image">
          <h3>Proactive System Monitoring</h3>
          <p class="p1">Administrators have real-time monitoring tools to ensure a smooth experience.</p>
        </div>
      </div>
    </section>
      </main>
      {/* Footer Section */}
      <footer>
        <div className="container">
          <p>&copy; 2023 Food Delivery System. All rights reserved.</p>
        </div>
      </footer>
      <script src="main.js" defer></script>
    </div>
  );
};

export default MainPage;
