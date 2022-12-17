let capitalize = require('./capitalize')

test('capitalizes first letter of apple', () => {
  expect(capitalize('apple')).toBe('Apple')
})