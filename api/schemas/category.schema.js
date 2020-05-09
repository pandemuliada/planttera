const { object, string } = require('yup')

const createOrUpdate = object().shape({
  name: string().required('Name cannot be empty'),
})

module.exports = { createOrUpdate }
