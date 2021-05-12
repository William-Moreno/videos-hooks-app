import axios from 'axios';

const KEY = 'AIzaSyBF8W5Zzr0V1MpSk1JLZiscYQa0BeSb5eo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});