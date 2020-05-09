const fs = require('fs')
const random = require('./random')

function generateRandomName(file) {
  const extension = file.mimetype.split('/')[1]
  const fileName = random() + '.' + extension

  return fileName
}

function unlinkFile(path) {
  fs.access(path, fs.F_OK, err => {
    if (err) {
      console.error(err)
    }

    fs.unlink(path, err => {
      if (err) console.error('Unlink file failed')
      console.log('File deleted successfully')
    })
  })
}

module.exports = {
  generateRandomName,
  unlinkFile,
}
