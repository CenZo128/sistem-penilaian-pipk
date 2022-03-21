const documentRoute = require('express').Router()
const DocumentController = require('../controllers/DocumentController')

documentRoute.get('/', DocumentController.allDocuments)
documentRoute.get('/info/:id', DocumentController.info)
documentRoute.post('/create', DocumentController.create)
documentRoute.delete('/delete/:id', DocumentController.delete)
documentRoute.put('/update/:id', DocumentController.update)

module.exports = documentRoute