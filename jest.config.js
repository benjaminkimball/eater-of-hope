module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  // NOTE: Needed to test the server's CommonJS modules!
  testURL: 'http://localhost/'
}
