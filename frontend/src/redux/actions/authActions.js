import axios from "axios";
import { USER_LOGIN_REQUEST } from "../constants";
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

      console.log(data);
    } catch (error) {}
  };
};
