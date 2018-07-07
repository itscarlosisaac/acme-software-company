import axios from 'axios';
const API_KEY = "LM5cFIkxw5OOGvOsk1fBYKkXjoxyQ5g2"

export default {
  FecthData(term, limit, offset, cb){
    const URL = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${API_KEY}&limit=${limit}&offset=${offset}`
    axios.get(URL)
      .then( response => response.data.data )
      .then( data => cb(data) )
      .catch(function (error) {
        console.log(error);
      })
  }
}