const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "login error"
      };
    case "SIGN_OUT":
      return state;
    case "SIGNUP_SUCCESS":
      return { ...state, authError: null };
    case "SIGNUP_ERROR":
      return { ...state, authError: action.e.message };
    default:
      return state;
  }
};
export default authReducer;
