import React from 'react';
import ProductCategory from './CustomComponents/ProductCategory';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import myObj from '../../src/Common/Filter';
import productDetails from '../../src/Common/ProductDetails';
//import ProductDetails  from './CustomComponents/ProductDetails';

export default class Product extends React.Component {
render(){
    return( <div>
            <ProductCategory myObj={myObj} productDetails={productDetails} detailLink="/product-details/"/>
            {/* <ProductDetails/> */}
    </div>)
}
}




