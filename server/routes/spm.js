const spmRoute = require('express').Router()
const SPMController = require('../controllers/SPMController')

spmRoute.get('/', SPMController.allSPMs)
spmRoute.get('/info/:id', SPMController.info)
spmRoute.post('/create', SPMController.create)
spmRoute.delete('/delete/:id', SPMController.delete)
spmRoute.put('/update/:id', SPMController.update)

module.exports = spmRoute