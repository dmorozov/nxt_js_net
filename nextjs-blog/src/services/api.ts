import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL, //set the base url on .env file
  timeout: 5000,
});

export const getPosts = (): Promise<string> => {
  /**
   * make your request here
   */
  return api.get('https://some.url/api').then((response) => response.data);
};
