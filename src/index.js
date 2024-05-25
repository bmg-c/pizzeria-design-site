import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import FAQ from "./views/faq";
import ShoppingCart from "./views/shopping-cart";
import OrderHistory from "./views/order-history";
import Main from "./views/main";
import Product from "./views/product";
import Personal from "./views/personal";
import Contacts from "./views/contacts";
import NotFound from "./views/not-found";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={FAQ} exact path="/faq" />
        <Route component={ShoppingCart} exact path="/shopping-cart" />
        <Route component={OrderHistory} exact path="/order-history" />
        <Route component={Main} exact path="/" />
        <Route component={Personal} exact path="/personal" />
        <Route component={Contacts} exact path="/contacts" />
        <Route component={Product} exact path="/product/*" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
