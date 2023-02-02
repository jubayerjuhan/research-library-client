export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action?.payload,
      };
    case "USER_LOGIN_ERROR":
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };
    case "SET_JWT":
      return {
        ...state,
        jwtToken: action.payload,
      };
    case "DELETE_JWT":
      return {
        ...state,
        jwtToken: null,
      };

    default:
      return state;
  }
};
