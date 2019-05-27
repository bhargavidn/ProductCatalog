import React from "react";
import productJson from '../Common/ProductDetails';
import ProductDetails from "./CustomComponents/ProductDetails";

class ProductDetailsParent extends React.Component{
constructor(props){
    super(props);
    this.state={
        id:"",
        productObj:{}
    }
}
    componentDidMount(){
        let url=window.location.href;
        let id = url && url.split("/").pop();
        let productObj = productJson && productJson.filter((product)=> product.productId === id);
        console.log(productObj); 
        this.setState({
            productId:id,
            productObj:productObj[0]
        })
    }
    renderProductDetails = () => {
        let { productObj } = this.state;
    
          return(
           <ProductDetails productObj={productObj}/>
          )
      }
render(){
        return (
            <div>
            {this.renderProductDetails()}
            </div>
        )
    }    
}

export default ProductDetailsParent;