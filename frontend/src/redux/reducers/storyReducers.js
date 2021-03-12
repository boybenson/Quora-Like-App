import {
  CREATE_STORY_FAILURE,
  CREATE_STORY_REQUEST,
  CREATE_STORY_SUCCESS,
} from "../constants";

export const createStoryReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CREATE_STORY_REQUEST:
      return {
        ...state,
        loading: true,
        story: null,
        success: false,
        errorData: null,
      };

    case CREATE_STORY_SUCCESS:
      return {
        ...state,
        loading: false,
        story: payload,
        success: true,
        errorData: null,
      };

    case CREATE_STORY_FAILURE:
      return {
        ...state,
        loading: false,
        story: null,
        sucess: false,
        errorData: payload,
      };

    default:
      return state;
  }
};
