import axios from 'axios';

const KEY = 'AIzaSyCgTZRvwYedx_-oeWeBeP64PjjwXBmn2BY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { 
    part: "snippet",
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});

