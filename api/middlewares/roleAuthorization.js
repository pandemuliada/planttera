function hasRole(role) {
  return (req, res, next) => {
    if (role === req.user.role.name) {
      next()
    } else {
      res.status(403).json({ message: 'Forbiden, you are not allowed to access this route!' })
    }
  }
}

function hasAnyRoles(roles) {
  return (req, res, next) => {
    if (roles.includes(req.user.role.name)) {
      next()
    } else {
      res.status(403).json({ message: 'Forbiden, you are not allowed to access this route!' })
    }
  }
}

function unlessRole(role) {
  return (req, res, next) => {
    if (role !== req.user.role.name) {
      next()
    } else {
      res.status(403).json({ message: 'Forbiden, you are not allowed to access this route!' })
    }
  }
}

function unlessRoles(roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role.name)) {
      next()
    } else {
      res.status(403).json({ message: 'Forbiden, you are not allowed to access this route!' })
    }
  }
}

module.exports = {
  hasRole,
  hasAnyRoles,
  unlessRole,
  unlessRoles,
}
