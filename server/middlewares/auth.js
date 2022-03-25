const { document } = require('../models')
const { tokenVerifier } = require('../helpers/jwt')

function authentication(req, res, next) {
    console.log("Authentication middleware")
    const { access_token } = req.headers;
    
    if (access_token) {
        // console.log(access_token)
        try {
            const decoded = tokenVerifier(access_token)
            // console.log(decoded)
            req.userData = decoded
            next()
        } catch (error) {
            res.status(401).json({
                message: "User not authenticated"
            })
        }
    } else {
        res.status(404).json({
            message: "Token not found"
        })
    }
}

function authorization(req,res,next){
    console.log("Authorization middleware")
    const id = +req.params.id;
    const UserId = req.userData.id

    document.findByPk(id)
    .then(blog => {
        if(!blog){
            res.status(404).json({
                message : "document not found"
            })
        }else if(blog.UserId !== UserId){
            res.status(401).json({
                message : "User is not authorized"
            })
        }else {
            next()
        }
    }) 
    .catch(err => {
       res.status(500).json(err) 
    })
}

module.exports = { authentication , authorization}