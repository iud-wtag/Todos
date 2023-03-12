import todoReducers from "reducers/todoReducers";
import handleButtonClick from "reducers/handleButtonClick";
import handleErrors from "reducers/handleErrors";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
  handleButtonClick,
  handleErrors,
});

export default rootReducer;
