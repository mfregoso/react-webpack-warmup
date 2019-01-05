import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

const defaultCheckedFilters = {
  gender: true,
  name: true,
  location: true,
  dob: true,
  picture: true,
  nat: true,
  phone: false
};

const initialResults = {
  people: global.people,
  checkedFilters: defaultCheckedFilters
};

const providePreloadStateMiddleware = store => next => action => {
  next({ ...action, preloadState: initialResults });
};

let composeEnhancers = compose;

const asyncReducer = (state = initialResults, action) => {
  if (action.type === "UPDATE_PEOPLE") {
    return {
      ...state,
      people: action.people
    };
  }

  if (action.type === "UPDATE_FILTER") {
    return {
      ...state,
      checkedFilters: action.checkedFilters
    };
  }

  return state;
};

export const Store = createStore(
  asyncReducer,
  initialResults,
  composeEnhancers(
    applyMiddleware(reduxThunk, providePreloadStateMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const intitialResultsState = {
  ...Store.getState()
};
