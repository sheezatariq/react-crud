import axios from "axios";
import { GET_CREDIENTIAL, SET_USER_SIGN_UP } from '../utils/types';
import { BASE_URL, LOGIN_URL, SIGNUP_URL } from '../utils/constant';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const login = (userData, history) => (dispatch)=> {
  const URL = BASE_URL + LOGIN_URL;
  axios
   .post(URL, userData)
    .then((res) => {
      const token = JSON.stringify(res.data.token);
      localStorage.setItem("token",token)
      history.push('/dashboard')
      toast.success('user login succesfully');
      dispatch({
        type: GET_CREDIENTIAL,
        payload: res.data.data
      });
    })
    .catch((error) => {
      const NET_ERROR = error.response && error.response.status >= 400 && error.response.status <= 500;
      if(NET_ERROR){
        toast.warning(error.response.data.email)
      }else {
        toast.warning('Unexpected Error')
      };
    });
};

export const signUp = ( userData,history) => (dispatch) => {
  const SIGN_UP_URL = BASE_URL + SIGNUP_URL
  axios
    .post(SIGN_UP_URL, userData)
    .then ((res) => {
      dispatch({
        type: SET_USER_SIGN_UP,
        payload: res.data.data

      });
      history.push('/login')
    });
}
