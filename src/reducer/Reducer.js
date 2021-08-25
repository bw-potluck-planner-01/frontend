import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_TEMP,
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
      localStorage.setItem("TOKEN", JSON.stringify(action.payload.token));
      return { ...state, token: action.payload.token, isLoading: false, error: null, userId: action.payload.organizer_id };
    }
    case LOGIN_FAIL: {
      return { ...state, error: action.payload, isLoading: false };
    }

    case LOGOUT_TEMP: {
      return { ...state, token: null, userId: null };
    }
    default: {
      const USER_CURRENT_TOKEN = localStorage.getItem("TOKEN");
      return { ...state, token: USER_CURRENT_TOKEN };
    }
  }
}
