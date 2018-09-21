const renderClient = require('./render-client')

const assetsBaseUrl = 'http://localhost'
const html = '<!DOCTYPE html><html><head></head><body></body></html>'

describe('renderClient()', () => {
  it('requires an assetsBaseUrl option', () => {
    expect(() => renderClient({ html })).toThrow('options.assetsBaseUrl')
  })

  it('requires an html option', () => {
    expect(() => renderClient({ assetsBaseUrl })).toThrow('options.html')
  })

  it('returns an Express route callback function', () => {
    const callback = renderClient({ assetsBaseUrl, html })

    expect(typeof callback).toEqual('function')
    expect(callback).toHaveLength(2)
  })
})
