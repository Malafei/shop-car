import { AuthState,  AuthAction, AuthActionTypes } from './types';


const initialState: AuthState = {
      user: null,
      isAuth: false,
};

export const authReducer = (state=initialState, action: AuthAction) : AuthState => {
    switch (action.type) {

      case AuthActionTypes.LOGIN_AUTH:
        return {
          ...state,
          isAuth: true,
          user: action.payload,
        };

      case AuthActionTypes.LOGOUT_AUTH:
        return {
          ...state,
          isAuth: false,
          user: {
            email: "",
          },
        };

      default:
        return state;
    }
}