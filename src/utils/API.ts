import axios from "axios";

const token = localStorage.getItem('@token');

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.authorization = `Bearer ${token}`;

const API = axios.create({
    // baseURL: process.env.REACT_APP_API_PROD
    baseURL: 'https://organizatattoo-55l5x.ondigitalocean.app'
});



export default API;