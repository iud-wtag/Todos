import todoReducers from "reducers/todoReducers";
import handleButtonClick from "reducers/handleButtonClick";
import handleErrors from "reducers/handleErrors";
import handleCurrentPage from "reducers/handleCurrentPage";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
  handleButtonClick,
  handleErrors,
  handleCurrentPage,
});

export default rootReducer;
