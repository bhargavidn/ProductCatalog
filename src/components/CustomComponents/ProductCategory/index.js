import React from 'react';
import {Link} from "react-router-dom";
import styles from './index.css';
import myObj from '../../../Common/Filter';
import productDetails from '../../../Common/ProductDetails';


export default class ProductCategory extends React.Component {
  renderFilter = () => {
    return myObj && myObj.map((item, index) => {
      console.log("myObj", item);
      return (
        <div key={index}>
          <h2 className={styles.heading}>{item.heading}</h2>
          {this.renderItems(item.filterValue)}
        </div>
      )
    })
  }
  renderItems = (filterValue) => {
    return filterValue.map((item, index) => {
      return (
        <div key={index}>
          <input type="checkbox" id="myCheck"></input>
          <label className="pl-2">{item.name}({item.quantity})</label>
        </div>)
    })
  }
  renderProductDetails = () => {
    return productDetails && productDetails.map( (detail,idx) => {

      return(
        <Link to="/product-details">
       <div className="row product-list py-4">
        <div className="col-sm-3" >
          <img src={detail.productImage} className="product-left-image px-5"/>
        </div>
        <div className="col-sm-9">
          <h2>{detail.productName}</h2>
          <div>{detail.rating}</div>
          <h4>{detail.price} {detail.actualPrice}</h4>
          <div>{detail.description}</div>
          <div>{detail.deliveryType}</div>
        </div>
      </div>
      </Link>
      
   
      )

    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-3 px-4" >
          {this.renderFilter()}
        </div>
        <div className="col-sm-9">
        {this.renderProductDetails()}
        </div> 
      </div>)
  }
}




