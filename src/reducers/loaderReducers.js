import { HANDLE_LOADER } from "actions/actionTypes";
const initialLoader = {
  loader: false,
};

const loaderReducers = (state = initialLoader, action) => {
  switch (action.type) {
    case HANDLE_LOADER:
      return {
        ...state,
        loader: action.payload.loader,
      };
    default:
      return state;
  }
};

export default loaderReducers;
