import {
  getModesActionRequest,
  getModesActionSuccess,
  getModesActionFailure,
} from "./actions";

import { getModesCollection } from "../../api/modes.api";

export const getModes = () => {
  return async (dispatch) => {
    dispatch(getModesActionRequest());

    try {
      const response = await getModesCollection();
      dispatch(getModesActionSuccess(response.data));
    } catch (error) {
      dispatch(getModesActionFailure(error.message));
    }
  };
};
