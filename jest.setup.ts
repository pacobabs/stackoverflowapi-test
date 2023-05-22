import 'jest-localstorage-mock'
import 'jest-extended'
import 'jest-extended/all'
import userMock from './usersMock'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        has_more: true,
        items: userMock
      })
  })
) as jest.Mock
