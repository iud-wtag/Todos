import { HANDLE_CREATE } from "actions/actionTypes";

const initialButton = {
  isCreateButtonClicked: false,
};

const buttonClickReducers = (state = initialButton, action) => {
  switch (action.type) {
    case HANDLE_CREATE:
      const { isCreateButtonClicked } = action.payload;
      return {
        isCreateButtonClicked,
      };

    default:
      return state;
  }
};
export default buttonClickReducers;
