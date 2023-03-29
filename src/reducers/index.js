import todoReducers from "reducers/todoReducers";
import handleButtonClick from "reducers/handleButtonClick";
import handleErrors from "reducers/handleErrors";
import handleCurrentPage from "reducers/handleCurrentPage";
import handleFilterState from "reducers/handleFilterStates";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
  handleButtonClick,
  handleErrors,
  handleCurrentPage,
  handleFilterState,
});

export default rootReducer;
