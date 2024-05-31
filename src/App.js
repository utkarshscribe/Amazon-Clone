import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Login from "./Login.js"

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          {/*This is the default route */}
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
          
        </Switch>
      </div>
    </Router> 
  );
}

export default App;


{/* We need React router */}

{/*localhost.com*/}
{/*localhost.com/checkout*/}
{/*localhost.com/login*/}