import todoReducers from "reducers/todoReducers";
import handleButtonClick from "reducers/handleButtonClick";
import handleErrors from "reducers/handleErrors";
import currentPageReducer from "reducers/currentPageReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
  handleButtonClick,
  handleErrors,
  currentPageReducer,
});

export default rootReducer;
