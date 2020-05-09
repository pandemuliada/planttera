const { object, string, number, boolean, mixed } = require('yup')

const createOrUpdate = object().shape({
  name: string().required('Name cannot be empty'),
  description: string().required('Description cannot be empty'),
  categoryId: number().required('Category cannot be empty'),
  roomId: number().required('Room cannot be empty'),
  price: number().required('Price cannot be empty'),
  stock: number().required('Stock cannot be empty'),
  available: boolean(),
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
  createOrUpdate,
  changePicture,
}
