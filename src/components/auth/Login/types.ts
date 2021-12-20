export interface ILoginModel{ //модель для форми
    email: string,
    password: string,
    invalid: string
}

export enum AuthActionTypes { //енамка для екшенів
    LOGIN_AUTH = "LOGIN_AUTH",
    LOGOUT_AUTH = "LOGOUT_AUTH",
}

export interface IUser { //інтерфейс якай описує юзера
    email: string,
}

  export interface ILoginResponse { //інтерфейс даних які ми очікуємо з сервера
    access_token: string,
    user: IUser
}
  
  export interface AuthState { // дані які передаєм у діспатч
    user: IUser|null;
    isAuth: boolean;
  }
  
  export interface LoginAuthAction { //опис екшену LOGIN_AUTH
      type: AuthActionTypes.LOGIN_AUTH,
      payload: IUser
  }

  export interface LogoutAuth {  //опис екшену LOGOUT_AUTH
      type: AuthActionTypes.LOGOUT_AUTH
  }
  
  export type AuthAction =
    | LoginAuthAction
    | LogoutAuth;
  
  
  export interface ILoginError { //інтерфейс длянаших помилок
    password: Array<string>;
    email: Array<string> ;
    invalid: string;
  }
  
  export interface ILoginErrors { 
    errors: ILoginError,
    status: number
  }