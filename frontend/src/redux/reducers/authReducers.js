import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants";

export const userLoginReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        userInfo: null,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: payload,
        success: true,
      };

    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        userInfo: null,
        success: false,
        data: payload,
      };
    default:
      return state;
  }
};
