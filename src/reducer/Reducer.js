import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../action/LoginAction";
const initialState = {
  username: "",
  password: "",
  token: null,
  error: null,
  isLoading: false,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("TOKEN", JSON.stringify(action.payload));
      return { ...state, token: action.payload, isLoading: false, error: null };
    }
    case LOGIN_FAIL: {
      return { ...state, error: action.payload, isLoading: false };
    }
    default: {
      return state;
    }
  }
}
