import { HANDLE_EMPTY } from "actions/actionTypes";

const initialError = {
  isEmptyError: false,
};

const errorReducers = (state = initialError, action) => {
  switch (action.type) {
    case HANDLE_EMPTY:
      const { isEmptyError } = action.payload;
      return {
        isEmptyError,
      };

    default:
      return state;
  }
};

export default errorReducers;
