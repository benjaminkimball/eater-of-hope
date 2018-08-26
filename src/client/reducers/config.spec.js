import config, { getConfig } from './config'

describe('config()', () => {
  it('returns an empty object by default', () => {
    expect(config(undefined, {})).toEqual({})
  })

  it('returns supplied initial state', () => {
    expect(config({ foo: true }, {})).toEqual({ foo: true })
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
