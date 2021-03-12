import axios from "axios";
import {
  CREATE_STORY_FAILURE,
  CREATE_STORY_REQUEST,
  CREATE_STORY_SUCCESS,
} from "../constants";

export const createStory = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_STORY_REQUEST });
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      "/api/stories/create-a-story/",
      formData,
      config
    );

    if (data.status === 201) {
      dispatch({ type: CREATE_STORY_SUCCESS, payload: data });
    } else {
      dispatch({ type: CREATE_STORY_FAILURE, payload: data });
    }
  } catch (error) {
    dispatch({ type: CREATE_STORY_FAILURE, payload: error.message });
  }
};
