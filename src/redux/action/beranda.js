import Axios from 'axios';

const API_HOST = {
  url: 'https://jsonplaceholder.typicode.com',
};

export const getProductData = () => async dispatch => {
  try {
    const response = await Axios.get(`${API_HOST.url}/posts`);
    dispatch({type: 'SET_PRODUCT', value: response.data});
  } catch (error) {
    console.log('error produk:', error);
  }
};
