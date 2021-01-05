import axios from 'axios';
const VLOVING_BLOG = `localhost:1020/blog`;
export const demo = params => axios.get(`${VLOVING_BLOG}/demo`, {
  params
});