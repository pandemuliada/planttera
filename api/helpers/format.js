const formatError = error => {
  let formatedError
  if (typeof error === 'object' && 'inner' in error) {
    formatedError = error.inner.map(({ path: field, message }) => {
      return { field, message }
    })
  }

  return formatedError
}

module.exports = {
  formatError,
}
