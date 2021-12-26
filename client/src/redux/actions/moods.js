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
