import reducer from './config'

describe('config()', () => {
  it('returns an empty object by default', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('returns supplied initial state', () => {
    expect(reducer({ foo: true }, {})).toEqual({ foo: true })
  })
})
