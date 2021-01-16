import * as yup from 'yup';

export const userSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  password: yup
    .string()
    .min(8, 'password must be at least 8 characters long!')
    .max(20, 'password must be at most 20 characters long!')
    .required('Required'),
  confirmPassword: yup
    .string()
    .min(8, 'password must be at least 8 characters long!')
    .max(20, 'password must be at most 20 characters long!')
    .required('Required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
