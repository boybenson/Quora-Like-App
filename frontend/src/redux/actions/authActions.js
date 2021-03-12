import axios from "axios";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants";

// Action For Login
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
    } catch (error) {
      dispatch({ type: USER_LOGIN_FAILURE, payload: error.message });
    }
  };
};

// Action For Logout
export const userLogout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};
