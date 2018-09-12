const parallelLimit = require('async/parallelLimit')
const { readdir } = require('fs')
const { Storage } = require('@google-cloud/storage')
const { join } = require('path')
const { promisify } = require('util')

const readDir = promisify(readdir)

const distDir = join(process.cwd(), 'dist')

const storage = new Storage()
const bucket = storage.bucket('assets')

readDir(distDir)
  .then(files => files.filter(file => /(\.css|\.js|\.map)$/.test(file)))
  .then(files => files.map(file => (callback) => {
    console.log(`  ${file}`)

    bucket
      .upload(join(distDir, file), {
        cacheControl: 'public, max-age=31536000',
        gzip: true,
        public: true
      })
      .then(() => callback(null, file))
      .catch((err) => callback(err))
  }))
  .then(tasks => {
    console.log('Uploading:')

    parallelLimit(tasks, 2, (err, result) => {
      if (err) {
        console.error('Failed:')
        console.log(`  ${err.message}`)
      } else {
        console.log('Uploaded:')
        console.log(`  ${result.join('\n  ')}`)
      }
    })
  })
  .catch(console.error)
