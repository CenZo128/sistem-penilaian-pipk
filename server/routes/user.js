const userRoute = require('express').Router()
const UserController = require('../controllers/UserController')

userRoute.get('/', UserController.allUsers)
userRoute.post('/register', UserController.register)
userRoute.post('/login', UserController.login)
userRoute.get('/account/:id', UserController.accountInfo)
userRoute.delete('/delete/:id', UserController.delete)
userRoute.put('/update/:id', UserController.update)

module.exports = userRoute