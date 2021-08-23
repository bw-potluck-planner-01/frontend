import { LOGIN_START, LOGIN_FINISH } from "../action/Login";
const initialState = {
  username: "",
  password: "",
  token: null,
  isLoading: false,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return { ...state, isLoading: true };
    }
    case LOGIN_FINISH: {
      return { ...state, isLoading: false, token: action.payload };
    }
    default: {
      return state;
    }
  }
}
