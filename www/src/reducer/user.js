import {combineReducers} from 'redux';
import {login, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../action/user.js';

const defaultState = {
  isLoggedIn : false,
  fetchingUdate : false,
  user : {}
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        fetchingUdate : true
      };
    case LOGIN_SUCCESS : 
      return {
        ...state,
        fetchingUdate : false,
        isLoggedIn : true,
        user : action.result,
      }
    case LOGIN_FAILURE :
      return {
        ...state,
        fetchingUdate : false
      }
  }
};

export default combineReducers({user : userReducer});