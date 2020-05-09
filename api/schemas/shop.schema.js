const { object, string, mixed } = require('yup')

const update = object().shape({
  name: string().required('Name cannot be empty!'),
  address: string().required('Address cannot be empty!'),
  phone: string().required('Phone cannot be empty!'),
})

const SUPPORTED_PICT_FORMAT = ['image/jpg', 'image/jpeg', 'image/png']
const changeLogo = object().shape({
  logo: mixed()
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

module.exports = { update, changeLogo }
