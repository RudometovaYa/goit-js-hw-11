import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50294923-8c76cd495fb5b8c97be727835';

export function fetchImages(userValue) {
  const params = {
    key: API_KEY,
    q: userValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return axios.get(BASE_URL, { params }).then(res => res.data);
}
