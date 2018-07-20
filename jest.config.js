module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/.cache/',
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/'
  ]
}
