import filterConfig from './filter-config'

describe('filterConfig()', () => {
  it('returns an empty object by default', () => {
    const result = filterConfig()

    expect(result).toEqual({})
  })

  it('returns an empty object when a non-object is supplied', () => {
    const config = "I'm not an object!"
    const result = filterConfig(config)

    expect(result).toEqual({})
  })

  it('only returns the keys that match the filter', () => {
    const config = { CLIENT_TEST: true, message: 'Hey.' }
    const result = filterConfig(config)

    expect(result).toEqual({ CLIENT_TEST: true })
  })
})
