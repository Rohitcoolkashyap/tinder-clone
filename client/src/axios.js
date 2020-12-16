import axios from 'axios';

const instance = axios.create({
  baseUrl: 'https://tinderbackend028.herokuapp.com',
});
export default instance;
