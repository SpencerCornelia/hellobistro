// Import dependencies
import React from 'react';
import { Route } from 'react-router-dom';
import ConfirmOrderContainer from '../Containers';
import OrderStatusContainer from '../Containers';

// Order component
const Order = () => (
  <div className="Order DebugComponentRed">
    <p>This is the <strong>Order</strong> component</p>
    <p>Fix it so it is rendered at <code>/orders/:order_id</code></p>
    <Route path="/" component={ConfirmOrderContainer} />
    <Route path="/" component={OrderStatusContainer} />
  </div>
);

export default Order;
