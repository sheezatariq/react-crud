import axios from "axios";
import { BASE_URL, GET_POST_LIST } from '../utils/constant';
import { GET_POSTS_LIST, CREATE_POST } from "../utils/types";

const GET_POST_URL = BASE_URL + GET_POST_LIST

export const getPost = () =>  dispatch => {
  const getToken = localStorage.getItem("token");
  const token = JSON.parse(getToken);
  console.log("token", token);
  axios
  .get(GET_POST_URL)
  .then(res => {
    dispatch({
      type: GET_POSTS_LIST,
      payload: res.data
    });
  });
};

export const createPost = (userData, history) => dispatch => {
  const getToken = localStorage.getItem("token");
  const token = JSON.parse(getToken);
  console.log("token", token);
  axios
    .post(GET_POST_URL,userData, {
      headers: {
        AUTHORIZATION: token,
      },
    })
    .then((res)=> {
      history.push('/dashboard/post');
      dispatch({
        type: CREATE_POST,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log("error is called", error.response);
    });
};
 
export const deletePost = (id) => (dispatch) => {
  const Token = localStorage.getItem("token");
  const token = JSON.parse(Token);
  console.log("token", token);
  const DELETE_URL = BASE_URL + `/posts/${id}`;
  axios
    .delete(DELETE_URL, {
      headers: {
        AUTHORIZATION: token,
      },
    })
    .then((res) => {
      dispatch(getPost());
    })
    .catch((error) => {
      console.log("error is called", error.response);
    });
};


