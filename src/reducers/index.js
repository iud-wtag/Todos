import todoReducers from "reducers/todoReducers";
import handleTokens from "reducers/handleTokens";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
  handleTokens,
});

export default rootReducer;
