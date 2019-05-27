import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom"
// import logo from './logo.svg';
// import './App.css';
import Product from '../src/components';
import ProductDetail from '../src/components/ProductDetailsParent';

function App() {
  return (

       <Router >
        <Route path="/" exact component={Product}/>
        <Route path="/product-details" component={ProductDetail}/>
       </Router> 
  
  );
}

export default App;
