import {
  GET_MODES_ACTION_REQUEST,
  GET_MODES_ACTION_SUCCESS,
  GET_MODES_ACTION_FAILURE,
  SET_MODE_ACTION,
  RESET_CELLS_ACTION,
  ADD_CELL_ACTION,
  REMOVE_CELL_ACTION,
} from "./actions";

const initialState = {
  modes: [],
  mode: null,
  cells: [],
  reset: false,
  isLoading: false,
  error: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MODES_ACTION_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_MODES_ACTION_SUCCESS:
      return { ...state, modes: action.data, isLoading: false };
    case GET_MODES_ACTION_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case SET_MODE_ACTION:
      return { ...state, mode: action.data, reset: false };
    case RESET_CELLS_ACTION:
      return { ...state, cells: [], reset: true };
    case ADD_CELL_ACTION:
      return { ...state, cells: [...state.cells, action.data], reset: false };
    case REMOVE_CELL_ACTION:
      return {
        ...state,
        cells: state.cells.filter((i) => i.id !== action.id),
        reset: false,
      };
    default:
      return state;
  }
};
