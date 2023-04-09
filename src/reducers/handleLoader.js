import { HANDLE_LOADER } from "actions/actionTypes";
const initialLoader = {
  loader: false,
};

const handleLoader = (state = initialLoader, action) => {
  switch (action.type) {
    case HANDLE_LOADER:
      return {
        ...state,
        loader: action.loader,
      };
    default:
      return state;
  }
};

export default handleLoader;
