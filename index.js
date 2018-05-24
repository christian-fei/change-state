module.exports = changeState

function changeState (state) {
  const change = (prop, cb) => {
    Object.assign(state, {
      [prop]: cb(state[prop])
    })
    return state[prop]
  }

  return { change }
}
