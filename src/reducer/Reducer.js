import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_TEMP,
  GRAB_TOKEN,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from "../action/LoginAction";
const initialState = {
  username: "",
  password: "",
  token: null,
  error: null,
  isLoading: false,
  userId: null,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("TOKEN", action.payload.token);
      localStorage.setItem('user_id', action.payload.organizer_id)
      return { ...state, token: action.payload.token, isLoading: false, error: null, userId: action.payload.organizer_id };
    }
    case LOGIN_FAIL: {
      return { ...state, error: action.payload, isLoading: false };
    }
    case GRAB_TOKEN:
      return {...state, token: action.payload.token, userId: action.payload.userId}

    case LOGOUT_START:
      return {...state, isLoading: true}

    case LOGOUT_SUCCESS:
      return { ...state, token: null, userId: null, isLoading: false };

    case LOGOUT_FAIL:
      return {...state, isLoading: false, error: action.payload}

    case LOGOUT_TEMP: {
      return { ...state, token: null, userId: null };
    }
    default: {
      const USER_CURRENT_TOKEN = localStorage.getItem("TOKEN");
      return { ...state, token: USER_CURRENT_TOKEN };
    }
  }
}
