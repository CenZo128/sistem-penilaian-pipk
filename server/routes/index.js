const route = require('express').Router()

route.get('/api', (req,res) => {
    res.status(200).json({
        message: "API Home"
    })
});

const userRoutes = require('./user')
const spmRoutes = require('./spm')
const documentRoutes = require('./document')

route.use('/api/users', userRoutes)
route.use('/api/spms', spmRoutes)
route.use('/api/documents', documentRoutes)

module.exports = route