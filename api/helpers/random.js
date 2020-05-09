const random = () => {
  return Math.random()
    .toString(36)
    .substring(4)
}

module.exports = random
