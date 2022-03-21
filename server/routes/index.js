const route = require('express').Router()

route.get('/api', (req,res) => {
    res.status(200).json({
        message: "API Home"
    })
});

module.exports = route