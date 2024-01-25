import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://bumblebees.io'
});


export default instance;