import { GET_MOODS, POST_MOODS, DELETE_MOOD, LIKE_MOOD } from '../types';

const initialState = [];

const moodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOODS:
      return action.payload;
    case POST_MOODS:
      return [...state, action.payload];
    case DELETE_MOOD:
      return state.filter((mood) => mood._id !== action.payload);
    case LIKE_MOOD:
      return state.map((mood) =>
        mood._id === action.payload._id ? action.payload : mood,
      );
    default:
      return state;
  }
};

export default moodsReducer;
