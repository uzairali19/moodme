import * as api from '../../api/index';

export const getMoods = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMoods();
    const action = { type: 'GET_MOODS', payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createMood = (mood) => async (dispatch) => {
  try {
    const { data } = await api.createMood(mood);
    const action = { type: 'POST_MOOD', payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
