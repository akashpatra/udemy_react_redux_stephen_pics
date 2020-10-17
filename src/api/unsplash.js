import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID HkUeFA-yFC_pjCZrJblZaz1jshsQxoYjOBd_SHVyvP8',
  },
});
