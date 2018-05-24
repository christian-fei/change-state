[![travis](https://img.shields.io/travis/christian-fei/change-state.svg?style=flat-square)](https://travis-ci.org/christian-fei/change-state) [![npm-version](https://img.shields.io/npm/v/change-state.svg?style=flat-square&colorB=007EC6)](https://www.npmjs.com/package/change-state) [![npm-dependencies](https://img.shields.io/badge/dependencies-none-blue.svg?style=flat-square&colorB=44CC11)](package.json) [![standard-js](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/) [![npm-license](https://img.shields.io/npm/l/change-state.svg?style=flat-square&colorB=007EC6)](https://spdx.org/licenses/ISC)



# change-state

> a stupid simple state container for your apps and tests

## usage in tests

```
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
```