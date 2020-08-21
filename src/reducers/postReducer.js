import { GET_POSTS_LIST, CREATE_POST } from "../utils/types";

const initialState = {
  get_post: '',
  create_post: '',
};

export default function ( state =  initialState, action) {
  switch (action.type) {
    case GET_POSTS_LIST:
    return {
      ...state,
      get_post: action.payload
    };
    case CREATE_POST:
      return {
        ...state,
        create_post: action.payload
      }
    default:
    return state;
  }
}