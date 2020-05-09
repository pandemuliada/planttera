const Room = require('../models')['Room']

async function find(params) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const data = await Room.findAll({
      where: { ...params },
    })

    if (data) {
      res.data = data
      return res
    }

    throw new Error('Data not found')
  } catch (error) {
    res.error = error.message
    return res
  }
}

async function findById(id) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const data = await Room.findByPk(id)

    if (data) {
      res.data = data
      return res
    }

    throw new Error('Data not found')
  } catch (error) {
    res.error = error.message
    return res
  }
}

async function create(body) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const room = await Room.findOne({
      where: {
        name: body.name,
      },
    })

    if (!!room) {
      throw new Error('Room already exists')
    }

    const newRoom = await Room.create(body)

    if (newRoom) {
      res.data = newRoom
      return res
    }

    throw new Error('Create failed')
  } catch (error) {
    res.error = error.message
    return res
  }
}

async function update(body, id) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const room = await Room.findOne({
      where: {
        name: body.name,
      },
    })

    if (!!room && room.id != id) {
      throw new Error('Room already exists')
    }

    const updated = await Room.update(body, { where: { id } })

    if (!updated) {
      throw new Error('Update failed')
    }
    const updatedRoom = await Room.findByPk(id)

    if (updatedRoom) {
      res.data = updatedRoom
      return res
    }
  } catch (error) {
    res.error = error.message
    return res
  }
}

async function destroy(params) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const room = await Room.findOne({ where: { ...params } })
    if (!room) {
      throw new Error('Delete failed, room not found')
    }

    const deleted = await room.destroy({ where: { ...params } })

    if (deleted) {
      res.data = room
      return res
    }

    throw new Error('Delete failed')
  } catch (error) {
    res.error = error.message
    return res
  }
}

module.exports = {
  find,
  findById,
  create,
  update,
  destroy,
}
