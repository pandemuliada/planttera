require('dotenv').config()

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, NODE_ENV } = process.env

module.exports = {
  development: {
    url: `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}_development`,
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    dialect: 'mysql',
  },
  test: {
    url: `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}_test`,
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    dialect: 'mysql',
  },
  production: {
    url: `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}_production`,
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_production`,
    host: DB_HOST,
    dialect: 'mysql',
  },
}
