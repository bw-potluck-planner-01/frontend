import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../action/Login";
const initialState = {
  username: "",
  password: "",
  token: null,
  isLoading: false,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START: {
      break;
    }
    case LOGIN_SUCCESS: {
      break;
    }
    case LOGIN_FAIL: {
      break;
    }
    default: {
      return state;
    }
  }
}
