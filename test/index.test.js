const {test} = require('m.test')

const {deepEqual} = require('assert')
const changeState = require('..')

test('mutates state by key', () => {
  const state = changeState({index: 0, time: 1527183130000})
  const inc1h = () => state.change('time', t => t + 1000 * 60 * 60)
  const incIndex = () => state.change('index', t => t + 1)

  const data = [{
    index: incIndex(), time: inc1h()
  }, {
    index: incIndex(), time: inc1h()
  }]

  deepEqual(data, [{
    index: 1, time: 1527186730000
  }, {
    index: 2, time: 1527190330000
  }])
})
