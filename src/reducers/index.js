import todoReducers from "reducers/todoReducers";
import handleTokens from "reducers/handleTokens";
import handleErrors from "reducers/handleErrors";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
  handleTokens,
  handleErrors,
});

export default rootReducer;
