import todoReducers from "reducers/todoReducers";
import buttonClickReducers from "reducers/buttonClickReducers";
import errorReducers from "reducers/errorReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
  errorReducers,
  buttonClickReducers,
});

export default rootReducer;
