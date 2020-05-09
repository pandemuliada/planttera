const successResponse = {
  2001: {
    code: 200,
    status: 'OK',
    message: 'OK',
  },

  2002: {
    code: 200,
    status: 'OK',
    message: 'You are logged out',
  },

  2003: {
    code: 201,
    status: 'Created',
    message: 'Successfully created',
  },

  2004: {
    code: 201,
    status: 'Created',
    message: 'Successfully updated',
  },

  2005: {
    code: 200,
    status: 'OK',
    message: 'Successfully deleted',
  },
}

const errorResponse = {
  4001: {
    code: 400,
    status: 'Bad Request',
    message: "Can't handle your request",
  },

  4002: {
    code: 401,
    status: 'Unauthorized',
    message: 'You need to login',
  },

  4003: {
    code: 403,
    status: 'Forbidden',
    message: 'No token provided',
  },

  4004: {
    code: 404,
    status: 'Not Found',
    message: 'Data is not found',
  },

  4005: {
    code: 422,
    status: 'Unprocessable Entity',
    message: 'Something went wrong',
  },

  4006: {
    code: 500,
    status: 'Internal Server Error',
    message: 'Please try again later',
  },

  4007: {
    code: 401,
    status: 'Unauthorized',
    message: "You don't have access to this service",
  },
}

module.exports = {
  errorResponse,
  successResponse,
}
