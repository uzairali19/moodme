import axios from 'axios';

const url = 'http://localhost:5000/moods';

export const fetchMoods = () => axios.get(url);
export const createMood = (newMood) => axios.post(url, newMood);
export const deleteMood = (id) => axios.delete(`${url}/${id}`);
export const likeMood = (id) => axios.patch(`${url}/${id}/likeMood`);
