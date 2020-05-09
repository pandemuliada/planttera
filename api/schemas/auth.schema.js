const { object, string } = require('yup')

const register = object().shape({
  name: string().required('Name cannot be empty'),
  email: string()
    .required('Email cannot be empty')
    .email('Invalid email address'),
  password: string()
    .required('Password cannot be empty')
    .min(6, 'Password minimal 6 characters'),
  role: string().required('Role cannot be empty'),
})

const login = object().shape({
  email: string()
    .required('Email cannot be empty')
    .email('Invalid email address'),
  password: string().required('Password cannot be empty'),
})

module.exports = {
  register,
  login,
}
