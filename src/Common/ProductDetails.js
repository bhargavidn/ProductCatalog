import iphone from "../images/iphone.jpg";
import iph1 from "../images/iph1.JPG";
import iph2 from "../images/iph2.JPG";
import iph3 from "../images/iph3.JPG";
import iph4 from "../images/iph4.JPG";
import iph5 from "../images/iph5.JPG";


const myProducts=[{
  "productId": "1",
  "productName": "Apple iPhone 7",
  "productImage": iphone,
  "productSubImages": [iph1,iph2,iph3,iph4,iph5],
  "availability": true,
  "features": `6.1-inch Liquid Retina display (LCD),  
    IP67 water and dust resistant (max depth of 1 m up to 30 mins),
    12MP camera with OIS and 7MP TrueDepth front camera,
    Face ID for secure authentication and Apple Pay,
    A12 Bionic with next-generation Neural Engine,
    Wireless charging—works with Qi chargers,
    No Contract Wireless No Activation Fees, No Credit Checks & No Hassles On a Nationwide Lightning-fast Network,
    To activate your device, please visit the SIMPLE Mobile website and Activate your new phone with a SIMPLE Mobile 30-day service plan,
    Note: This phone is carrier locked; Customers must have had their locked device activated on SIMPLE Mobile service for no fewer than 12 months, redeemed air time cards in no fewer than 12 months, and not have had their telephone number recycled or ported.`,
  "description": "Get it as soon as Sat, May 25",
  "price":"10000",
  "actualPrice":"15000",
  "rating": "3",
  "deliveryType": "FREE Shipping by Amazon",
  "productOfferText": {},
  "productOfferAmount": {}
},
{
  "productId": "2",
  "productName": "Sonix",
  "productImage": iphone,
  "productSubImages": [iph1,iph2,iph3,iph4,iph5],
  "availability": true,
  "features": "",
  "description": "Get it as soon as Sat, May 25",
  "price":"10000",
  "actualPrice":"15000",
  "rating": "3",
  "deliveryType": "FREE Shipping by Amazon",
  "productOfferText": {},
  "productOfferAmount": {}
},
{
  "productId": "3",
  "productName": "Apple iPhone 6",
  "productImage": iphone,
  "productSubImages": [],
  "availability": true,
  "features": "",
  "description": "Get it as soon as Sat, May 25",
  "price":"10000",
  "actualPrice":"15000",
  "rating": "3",
  "deliveryType": "FREE Shipping by Amazon",
  "productOfferText": {},
  "productOfferAmount": {}
}]

export default myProducts;