import { HANDLE_CREATE, HANDLE_SEARCH } from "actions/actionTypes";

const initialButton = {
  isCreateButtonClicked: false,
  isSearchButtonClicked: false,
};

const buttonClickReducers = (state = initialButton, action) => {
  switch (action.type) {
    case HANDLE_CREATE:
      const { isCreateButtonClicked } = action.payload;
      return {
        ...state,
        isCreateButtonClicked,
      };

    case HANDLE_SEARCH:
      const { isSearchButtonClicked } = action.payload;
      return {
        ...state,
        isSearchButtonClicked: isSearchButtonClicked,
      };

    default:
      return state;
  }
};
export default buttonClickReducers;
