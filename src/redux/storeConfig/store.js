// import { createStore } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "../rootReducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// const composedEnhancers =
//   window.REDUX_DEVTOOLS_EXTENSION_COMPOSE ||
//   compose(middlewareEnhancer, monitorReducerEnhancer);

export default store;
