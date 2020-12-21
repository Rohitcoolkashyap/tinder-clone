import axios from 'axios';

const localhost = 'http://localhost:5000';
const production = 'https://tinderbackend028.herokuapp.com';
const instance = axios.create({
  baseUrl: production,
});
export default instance;
