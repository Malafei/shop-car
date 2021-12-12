import { Dispatch } from "react";
import http from "../../../http_common";
import { AuthAction, AuthActionTypes, ILoginErrors, IUser } from "./types";
import jwt from "jsonwebtoken";
import axios, { AxiosError } from "axios";
import setAuthToken from '../../../helpers/setAuthToken';
import { ILoginModel } from './types';

export interface ILoginResponse {
  token: string
}


export const LoginUser = (data: ILoginModel) => async (dispatch: Dispatch<AuthAction>) => {
        try {
          const response = await http.post<ILoginResponse>("api/auth/login", data);
          const token = response.data.token;
          
          console.log("tutochki", token)
          setAuthUserByToken(token, dispatch);
          
          return Promise.resolve();

        } catch (err: any) {
            if (axios.isAxiosError(err)) {
              const serverError = err as AxiosError<ILoginErrors>;
              if (serverError && serverError.response) {
                const { errors } = serverError.response.data;
                return Promise.reject(errors);
              }
            }
            
             return Promise.reject();
          
        }
    }


export const setAuthUserByToken = (token: string , dispatch: Dispatch<any>) => {

    setAuthToken(token);
    localStorage.token = token;
    console.log("tuta", token)
    const dataUser = jwt.decode(token, { json: true });

    console.log("tut", dataUser)

    const user: IUser = {
      email: dataUser!.email,
    };
    
    dispatch({
      type: AuthActionTypes.LOGIN_AUTH,
      payload: user,
    });
  
  
  }

export const LogoutUser = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
          setAuthToken('');
            dispatch({ type: AuthActionTypes.LOGOUT_AUTH });
            localStorage.removeItem('user')
        } catch (error) {
            
        }
    }
}