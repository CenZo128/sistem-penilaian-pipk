const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY //process.env.SECRET_KEY

const tokenGenerator = user => {
    const { id, namalengkap, NIP, handphone, unitkerja, kewenangan, akun, foto } = user
    let token = jwt.sign({
        id, namalengkap, NIP, handphone, unitkerja, kewenangan, akun, foto
    }, secretKey)
    return token
}

const tokenVerifier = token => {
    let decoded = jwt.verify(token, secretKey)
    return decoded
}
module.exports = {
    tokenGenerator, tokenVerifier
}