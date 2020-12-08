const fs = require('fs')

const bunyan = require('bunyan')
const { Article } = require('../models')

/**
 * The logger.
 * *
 * @type {Logger}
 */
const LOG = bunyan.createLogger({name: __filename})



const uploadFiles = async (req, res) => {
  try {
    LOG.debug('File', {file: req.file})

    if (req.file == undefined) {
      return res.send(`You must select a file.`)
    }
    Image.create({
      id: uuid.v4(),
      title: req.file.originalname,
      description: req.file.originalname,
      images: fs.readFileSync(
        '/tmp' + req.file.filename
      ),
    }).then((image) => {
      fs.writeFileSync(
        '/tmp' + image.title,
        image.images,
      )

      return res.send(`File has been uploaded.`)
    })
  } catch (error) {
    LOG.error('An error occurs', {error})
    return res.send(`Error when trying upload images: ${error}`)
  }
}

module.exports = {
  uploadFiles,
}
