// app.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LiveOrderTracker from './LiveOrderTracker';
import OrderManagement from './OrderManagement';  
import Feedback from './Feedback';
import OrderPlacement from './OrderPlacement';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="header">
          <h1>Order Management</h1>
        </div>
        <div className="App">
          <Switch>
            <Route path="/order-management" component={OrderManagement} />
            <Route path="/live-order-tracker" component={LiveOrderTracker} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/order-placement" component={OrderPlacement} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
