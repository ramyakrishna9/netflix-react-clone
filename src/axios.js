import axios from 'axios'

const instance = axios.create({
  baseURL: " https://api.themoviedb.org/3",
    
});



export default instance;
//if the axios is not detecting then we can do npm install -- save axios