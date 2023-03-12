import { HANDLE_EMPTY } from "actions/actionTypes";

const initialError = {
  isEmptyError: false,
};

const handleErrors = (state = initialError, action) => {
  switch (action.type) {
    case HANDLE_EMPTY:
      const { isEmptyError } = action.payload;
      return {
        isEmptyError: isEmptyError,
      };

    default:
      return state;
  }
};

export default handleErrors;
