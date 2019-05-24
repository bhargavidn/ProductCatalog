import React from 'react';
import ProductCategory from './CustomComponents/ProductCategory';
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import ProductDetails  from './CustomComponents/ProductDetails';

export default class Product extends React.Component {
render(){
    return( <div>
            <ProductCategory/>
            {/* <ProductDetails/> */}
    </div>)
}
}




