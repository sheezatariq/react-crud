import axios from "axios";
import { BASE_URL } from '../utils/constant';
import { toast } from "react-toastify";

export const createProfile = (userData) => (dispatch) => {
  const Token = localStorage.getItem("token");
  const token = JSON.parse(Token);
  console.log("token", token);
  const PROFILE_URL = BASE_URL + "/profile"
  axios
    .post(PROFILE_URL,userData, {
      headers: {
        AUTHORIZATION: token,
      },
    })
    .then((res) => {
      console.log("response=", res);
      toast.success('Profile Created Successfully');
    })
    .catch((error) => {
      console.log("error is called", error.response);
    });
};
    
