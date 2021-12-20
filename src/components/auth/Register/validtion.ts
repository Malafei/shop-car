import * as Yup from "yup";


export const RegisterSchema = Yup.object({
  email: Yup.string()
    .email('Не коректно вказана пошта') //перевірки чи формат уведений правильно
    .required("Вкажіть пошту"), // перевірка чи поле не пусте

  name: Yup.string()
    .required("Вкажіть логін") // перевірка чи поле не пусте
    .min(6, 'Логін має містить мінімум 6 символів.'), //перевірки чи кількість символів уведена правильно

  photo: Yup.array().min(1, "Виберіть аватар").nullable(),
  
  password: Yup.string()
    .required('Вкажіть пароль.')  // перевірка чи поле не пусте
    .min(6, 'Пароль має містить мінімум 6 символів.') //перевірки чи кількість символів уведена правильно
    .matches(/[a-zA-Z]/, 'Пароль має містить латинські символи.'), //перевірки чи формат уведений правильно

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Не співпадають паролі') // перевірка чи паролі одинакові
    .required("Повтор пароля є обов'язковим"), // перевірка чи поле не пусте


});