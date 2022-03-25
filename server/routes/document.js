const documentRoute = require('express').Router()
const DocumentController = require('../controllers/DocumentController')
// const { authentication } = require('../middlewares/auth')

const upload = require('../middlewares/multer')

documentRoute.get('/', DocumentController.allDocuments)
documentRoute.get('/info/:id', DocumentController.info)
documentRoute.post('/create', upload.single('files'), DocumentController.create)
documentRoute.delete('/delete/:id', DocumentController.delete)
documentRoute.put('/update/:id', DocumentController.update)

module.exports = documentRoute