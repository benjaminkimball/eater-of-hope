const parallelLimit = require('async/parallelLimit')
const retryable = require('async/retryable')
const { readdir } = require('fs')
const { Storage } = require('@google-cloud/storage')
const { join } = require('path')
const { promisify } = require('util')

const readDir = promisify(readdir)
const runParallelTasks = promisify(parallelLimit)

const distDir = join(process.cwd(), 'dist')

const storage = new Storage()
const bucket = storage.bucket('eater-of-hope-assets')

readDir(distDir)
  .then(files => files.filter(file => /(\.css|\.js|\.map)$/.test(file)))
  .then(files => files.map(file => retryable(2, callback => {
    bucket
      .upload(join(distDir, file), {
        cacheControl: 'public, max-age=31536000',
        gzip: true,
        public: true
      })
      .then(() => callback(null, file))
      .catch((err) => {
        if (err.code === 403) {
          callback(null, file)
        } else {
          callback(err)
        }
      })
  })))
  .then(tasks => runParallelTasks(tasks, 2))
  .then(console.log)
  .catch(console.error)
