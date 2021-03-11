import axios from "axios";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants";
export const userLogin = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/auth/login",
        {
          email,
          password,
        },
        config
      );

      if (data.status === 200) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      } else {
        dispatch({ type: USER_LOGIN_FAILURE, payload: data });
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};
