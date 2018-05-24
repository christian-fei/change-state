module.exports = statey

function statey (state) {
  const change = (prop, cb) => {
    Object.assign(state, {
      [prop]: cb(state[prop])
    })
    return state[prop]
  }

  return { change }
}
