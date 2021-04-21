import axios from 'axios';
const BASE_URL = 'http://localhost:8080/api';

export const getProducts = search => {
  return axios.get(`${BASE_URL}/items?q=${search}`)
  .then(({data}) => data)
}

export const getProductDetails = productId => {
  return axios.get(`${BASE_URL}/items/${productId}?includeFilters=true`)
  .then(({data}) => data)
}