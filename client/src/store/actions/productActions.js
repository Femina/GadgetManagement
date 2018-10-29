import { FETCH_PRODUCTS } from './types';
import axios from 'axios';


      //726527563067e8e17e11ebfd3466192bd6633bb2d630e6bb
const productsAPI = "https://fonoapi.freshpixl.com/v1/getlatest?token=e2cccae6aece418d74f700249c7168056921c8c67121cb51&limit=20";
//"https://sheltered-river-73269.herokuapp.com/products.json";
//"https://fonoapi.freshpixl.com/v1/getlatest?token=e2cccae6aece418d74f700249c7168056921c8c67121cb51&limit=20";


const compare = {
  'price': (a, b) => {
    if(a.price)
      a.price = (a.price).replace(/\D/g, "");
    if(b.price)
      b.price = (b.price).replace(/\D/g, "");
    if (a.price > b.price)
      return -1;
    if (a.price < b.price)
      return 1;
    return 0;
  }
}

export const fetchProducts = (filters, sortBy, callback) => dispatch => {

  axios.get(productsAPI)
    .then(res => {
      let products  = res.data;

      if(!!filters && filters.length > 0){
        
        products = products.filter( p => filters.find( f => p.Brand === f ))
      }

      if(!!sortBy){
        products = products.sort(compare[sortBy]);
      }

      if(!!callback) {
        callback();
      }

      if(!products)
        console.log("Res:",res.data);
   
      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
      
    })
    .catch(err => {
      console.log(err);
      
    });
}