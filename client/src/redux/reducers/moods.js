const GET_MOODS = 'GET_MOODS';
const POST_MOODS = 'POST_MOODS';
const PUT_MOOD = 'PUT_MOOD';
const DELETE_MOOD = 'PUT_MOOD';

const initialState = [];

const moodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOODS:
      return action.payload;
    case POST_MOODS:
      return state;
    default:
      return state;
  }
};

export default moodsReducer;
