import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import productReducer from "../store/reducer";
import cartSaga from "../saga";
import { composeWithDevTools } from "@redux-devtools/extension";

const reduxDevToolsOptions = { trace: true, traceLimit: 30 };
const sagaMiddleware = createSagaMiddleware();
const getStoreEnhancer = () => applyMiddleware(sagaMiddleware);

export default function createAppStore(initialState) {
  const enhance = composeWithDevTools(reduxDevToolsOptions)(getStoreEnhancer());
  const store = createStore(productReducer, initialState, enhance);
  sagaMiddleware.run(cartSaga);
  return store;
}
