export interface ILoginModel{
    email: string,
    password: string
}

export enum AuthActionTypes {
    LOGIN_AUTH = "LOGIN_AUTH",
    LOGOUT_AUTH = "LOGOUT_AUTH",
  }
  export interface IUser {
      email: string,
  }
  
  export interface AuthState {
    user: IUser;
    isAuth: boolean;
  }
  
  export interface LoginAuthAction {
      type: AuthActionTypes.LOGIN_AUTH,
      payload: IUser
  }

  export interface LogoutAuth {
      type: AuthActionTypes.LOGOUT_AUTH
  }
  
  export type AuthAction =
    | LoginAuthAction
    | LogoutAuth;
  
  
  export interface ILoginError {
    password: Array<string>;
    email: Array<string> ;
    invalid: string;
  }
  
  export interface ILoginErrors {
    errors: ILoginError,
    status: number
  }