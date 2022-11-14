import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import bootstrapReducers from "../redux/combineReducers";

let finalReducers = bootstrapReducers;

const composeEnhancer =
  (process.env.NODE_ENV !== "production"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  finalReducers,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);
