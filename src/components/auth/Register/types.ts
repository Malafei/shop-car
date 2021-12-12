export interface IRegisterModel{
    email: string,
    login: string,
    password: string,
    confirmPassword: string
}

export enum RegisterActionTypes {
    REGISTER_START = "REGISTER_START",
    REGISTER_SUCCESS = "REGISTER_SUCCESS",
  }
  
  export interface RegisterStartAction {
    type: RegisterActionTypes.REGISTER_START;
  }
  
  export interface RegisterSuccessAction {
    type: RegisterActionTypes.REGISTER_SUCCESS;
    payload: string;
  }
  
  export type RegisterAction =
    | RegisterStartAction
    | RegisterSuccessAction
  ;
  