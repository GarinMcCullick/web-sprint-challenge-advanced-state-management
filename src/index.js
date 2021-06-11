import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from 'redux';

import "./index.css";
import App from "./App";
import reducer from './reducers/index'

import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(reducer,applyMiddleware(logger, thunk));

function logger() {
    return next => action => {
      const returnValue = next(action)
      return returnValue
    }
  }

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
    <App />, 
    </Provider>,
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods. ---Done
//2. Create a store that includes thunk and logger middleware support. ---Done
//3. Wrap the App component in a react-redux Provider element. ---Done