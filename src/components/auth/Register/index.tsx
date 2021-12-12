import { Form, FormikProvider, useFormik } from "formik";
import {IRegisterModel} from './types';
import {RegisterSchema} from './validtion';
import {InputGroup} from '../../common/InputGroup';



const RegiterPage = () =>{


    const initialValues : IRegisterModel={
        email: "",
        login: "",
        password: "",
        confirmPassword: ""
    }


    const onHandleSubmit = (values: IRegisterModel) =>{
      const formData = new FormData();
      Object.entries(values).forEach
      (
          ([key, value]) => formData.append(key, value)
      );
      
        console.log("Server Send data: " , values)
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: RegisterSchema,
        onSubmit: onHandleSubmit
    })

    const { errors, touched, handleChange, handleSubmit } = formik;




    return(
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h1>Реєстрація на сайті</h1>
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
                      field="login"
                      label="Логін"
                      placevalue ="Введіть логін"
                      error={errors.login}
                      touched={touched.login}
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

                    <InputGroup
                      field="confirmPassword"
                      label="Повторіть пароль"
                      type="password"
                      placevalue ="Повторіть пароль"
                      touched={touched.confirmPassword}
                      error={errors.confirmPassword}
                      onChange={handleChange}
                    />
        
                    <button type="submit" className="btn btn-success">
                        Реєстрація
                    </button>
                  </Form>
                </FormikProvider>
              </div>
            </div>
    );
}
export default RegiterPage;