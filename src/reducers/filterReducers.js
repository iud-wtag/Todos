import { HANDLE_FILTER } from "actions/actionTypes";
import { LABEL_FILTER_ALL } from "common/constants";

const initialFilter = {
  filterType: LABEL_FILTER_ALL,
};

const filterReducers = (state = initialFilter, action) => {
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

export default filterReducers;
