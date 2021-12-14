import { Form, FormikProvider, FormikHelpers, useFormik } from "formik";
import {ILoginModel, ILoginError} from './types';
import {LoginSchema} from './validtion';
import {InputGroup} from '../../common/InputGroup';
import { useNavigate } from "react-router";
import { useActions } from "../../../hooks/useActions";

const LoginPage = () =>{


    const initialValues : ILoginModel={
        email: "",
        password: "",
        invalid:""
    }


    const navigator = useNavigate();
    const { LoginUser } = useActions();


    const onHandleSubmit = async (values: ILoginModel, { setFieldError }: FormikHelpers<ILoginModel>) => {
      try {
        await LoginUser(values);
        await navigator("/");
      } catch (errors) {
        const serverErrors = errors as ILoginError;
        const { password, invalid } = serverErrors;
        console.log("passwword", password);
        console.log("invalid", invalid);
  
        if (password !== undefined) {
          setFieldError("password", password[0]);
        }
        console.log(invalid.length);
        
        if (invalid !== undefined){
          setFieldError("invalid", invalid[0]);
        }
      }
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: onHandleSubmit
    })

    const { errors, touched, handleChange, handleSubmit } = formik;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h1>Вхід на сайт</h1>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>
            <InputGroup
              field="email"
              label="Пошта"
              placevalue ="Введіть пошту"
              error={errors.email}
              touched={touched.email}
              onChange={handleChange}
            />

            <InputGroup
              field="password"
              label="Пароль"
              type="password"
              placevalue ="Введіть пароль"
              touched={touched.password}
              error={errors.password}
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-success">
              Вхід
            </button>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
}
export default LoginPage;