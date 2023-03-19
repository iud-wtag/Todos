import { HANDLE_CREATE } from "actions/actionTypes";

const initialButton = {
  isCreateBtnClicked: false,
};

const handleButtonClick = (state = initialButton, action) => {
  switch (action.type) {
    case HANDLE_CREATE:
      const { isCreateBtnClicked } = action.payload;
      return {
        ...state,
        isCreateBtnClicked: isCreateBtnClicked,
      };

    default:
      return state;
  }
};
export default handleButtonClick;
