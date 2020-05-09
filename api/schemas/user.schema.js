const { object, string, ref, mixed } = require('yup')

const update = object().shape({
  name: string().required('Name cannot be empty'),
  email: string().required('Email cannot be empty'),
  role: string().required('Role cannot be empty'),
})

const changePassword = object().shape({
  oldPassword: string().required('Password cannot be empty'),
  newPassword: string()
    .required('Password cannot be empty')
    .min(6, 'Password minimal 6 characters'),
  newPasswordConfirm: string()
    .oneOf([ref('newPassword'), null], 'Password does not match')
    .required('Password cannot be empty'),
})

const SUPPORTED_PICT_FORMAT = ['image/jpg', 'image/jpeg', 'image/png']
const changePicture = object().shape({
  picture: mixed()
    .required('Please select a file')
    .test(
      'fileFormat',
      'Unsupported file format',
      value => value && SUPPORTED_PICT_FORMAT.includes(value.mimetype)
    )
    .test(
      'fileSize',
      'File size is too large',
      value => value && value.size / 1024 / 1024 <= 0.5 // Set error if file size is more than 500kb
    ),
})

module.exports = {
  update,
  changePassword,
  changePicture,
}
