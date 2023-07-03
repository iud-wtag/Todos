import { HANDLE_CURRENT_PAGE } from "actions/actionTypes";

const initialPage = {
  currentPage: 1,
};

const currentPageReducer = (state = initialPage, action) => {
  switch (action.type) {
    case HANDLE_CURRENT_PAGE: {
      const { currentPage } = action.payload;
      return {
        ...state,
        currentPage,
      };
    }

    default:
      return state;
  }
};
export default currentPageReducer;
