import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:8082',
  headers: {
    'Content-type': 'application/json',
     Accept: 'application/json' }
});

export default http;