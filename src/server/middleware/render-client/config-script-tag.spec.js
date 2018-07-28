const configScriptTag = require('./config-script-tag')

describe('configScriptTag()', () => {
  it('uses an empty config object by default', () => {
    const result = configScriptTag()

    expect(result.includes('{}')).toBe(true)
  })

  it('uses an empty config object when a non-object is supplied', () => {
    const config = "I'm not an object!"
    const result = configScriptTag(config)

    expect(result.includes("I'm not an object")).not.toBe(true)
  })

  it('uses supplied config object', () => {
    const config = { CLIENT_TEST: true }
    const result = configScriptTag(config)

    expect(result.includes('{"CLIENT_TEST":true}')).toBe(true)
  })
})
