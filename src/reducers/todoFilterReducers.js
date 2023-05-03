import { HANDLE_FILTER } from "actions/actionTypes";
import { FILTER_LABEL_ALL } from "common/constants";

const initialFilter = {
  filterType: FILTER_LABEL_ALL,
};

const todoFilter = (state = initialFilter, action) => {
  switch (action.type) {
    case HANDLE_FILTER: {
      const { filterType } = action.payload;
      return {
        ...state,
        filterType,
      };
    }

    default:
      return state;
  }
};

export default todoFilter;
