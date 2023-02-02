import { client } from "../../client.js";

export const registerUser = (creds, register) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_LOADING" });
    const { data } = await client.post(
      `${register ? "/user/register" : "/user/login"}`,
      creds
    );

    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data.user });
    dispatch({ type: "SET_JWT", payload: data.jwtToken });
    window.location.href = "/";
  } catch (error) {
    console.log(error);
    alert(error.response.data?.message);
  }
};
