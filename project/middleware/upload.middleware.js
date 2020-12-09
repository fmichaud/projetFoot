/**
 * A middleware to process a picture upload.
 *
 */

const bunyan = require('bunyan')
const multer = require('multer')
const uuid = require('uuid')


/** The logger.
 *
 * @type {Logger}
 */
const LOG = bunyan.createLogger({name: __filename})

/**
 * Check content-type: is the file an image type ?
 *
 * @param req The HTTP request.
 * @param file The file to upload if content-type is an image.
 * @param cb The callback function.
 */
const imageFilter = (req, file, cb) => {
  LOG.debug('Image filter', {file: file})
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('Please upload only image file.', false)
  }
}

/**
 * Override {multer} methods.
 *
 * @type {*|DiskStorage}
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/tmp/')
  },
  filename: (req, file, cb) => {
    LOG.info('Filename', {request: file})
    const dest = `${uuid.v4()}-${file.originalname}`
    LOG.debug(`Store to disk`, {src: file.originalname, dest: dest})
    cb(null, dest)
  },
})

module.exports = multer({ storage: storage, fileFilter: imageFilter })
