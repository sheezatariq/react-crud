import { GET_CREDIENTIAL, SET_USER_SIGN_UP } from '../utils/types';

const initialState = {
  user_login: '',
  signUp_user: '',
};


export default function ( state = initialState, action) {
  switch(action.type) {
    case GET_CREDIENTIAL:
    return {
      ...state,
      user_login: action.payload
    };
    case SET_USER_SIGN_UP:
      return {
        ...state,
        signUp_user: action.payload
      }
    default:
    return state;
  };
};