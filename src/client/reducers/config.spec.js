import reducer, { getConfig } from './config'

describe('config()', () => {
  it('returns an empty object by default', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('returns supplied initial state', () => {
    expect(reducer({ foo: true }, {})).toEqual({ foo: true })
  })
})

describe('getConfig()', () => {
  it('returns an empty object by default', () => {
    expect(getConfig()).toEqual({})
  })

  it('returns the raw config branch of the store', () => {
    const state = { config: { CLIENT_TEST: 'foo' } }

    expect(getConfig(state)).toEqual(state.config)
  })
})
