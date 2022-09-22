import axios from 'axios';

const getProducts = () => axios.get('https://dummyjson.com/products/search?q=shirt&limit=5').then((res) => res.data).then((data) => data.products);

export default getProducts;
