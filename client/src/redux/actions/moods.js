import * as api from '../../api/index';
import { GET_MOODS, DELETE_MOOD, POST_MOODS, LIKE_MOOD } from '../types';

export const getMoods = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMoods();
    const action = { type: GET_MOODS, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const createMood = (mood) => async (dispatch) => {
  try {
    const { data } = await api.createMood(mood);
    const action = { type: POST_MOODS, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const deleteMood = (id) => async (dispatch) => {
  try {
    await api.deleteMood(id);
    const action = { type: DELETE_MOOD, payload: id };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const likeMood = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeMood(id);
    const action = { type: LIKE_MOOD, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
