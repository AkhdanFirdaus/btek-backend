const multer = require('multer')
const path = require('path')

const assetPath = path.join('/', 'assets', 'uploads')

const extGenerator = (type) => {
  const mime = ['image/jpeg', 'image/png', 'image/webp']
  const sortedExt = ['img', 'png', 'webp']
  return sortedExt[mime.indexOf(type)]
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, assetPath)
  },
  filename: async (req, file, cb) => {
    const ext = extGenerator(file.mimetype)
    const { customAlphabet } = await import('nanoid')
    const nanoid = customAlphabet('0123456789', 10)

    cb(null, nanoid().concat(`.${ext}`))
  }
})

const fileFilter = (req, file, cb) => {
  const ext = extGenerator(file.mimetype)
  if (ext) {
    cb(null, true)
  } else {
    cb(new Error('File extension not supported'), false)
  }
}

const mult = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1 * 1000 * 1000
  }
})

const upload = (field) => {
  const up = mult.single(field)
  return (req, res, next) => {
    up(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message
        })
      } else {
        next()
      }
    })  
  }
}

module.exports = upload
