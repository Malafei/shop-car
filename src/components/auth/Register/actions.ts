import axios, { AxiosError } from 'axios';
import { Dispatch } from 'react';
import http from '../../../http_common';
import { setAuthUserByToken } from '../Login/actions';
import { RegisterAction, RegisterActionTypes, RegisterErrors } from './types';


export const RegisterUser = (data: FormData) => {return async (dispatch: Dispatch<RegisterAction>) => {
    try {
        const response = await http.post("api/auth/register", data, {headers: { "Content-Type": "multipart/form-data" },});
        const {access_token} = response.data;

        console.log("response ", response.data);
        console.log("token ",access_token);

        dispatch({
          type: RegisterActionTypes.REGISTER_SUCCESS,
          payload: access_token,
        });

        console.log("setadgs");
        
        setAuthUserByToken(access_token, dispatch);
        console.log("setadgs 222");
        return Promise.resolve(access_token);  
    }
    catch (err: any) {
        console.log("nachalo catch 23");

        if (axios.isAxiosError(err)) {
          const serverError = err as AxiosError<RegisterErrors>;
          if (serverError && serverError.response) {
            const { errors } = serverError.response.data;
            return Promise.reject(errors);
          }
        }
    }
};
};