const { user } = require('../models')
const { encryptPwd, decryptPwd } = require('../helpers/bcrypt')
const { tokenGenerator } = require('../helpers/jwt')
class UserController {
    static async allUsers(req, res) {
        try {
            const users = await user.findAll()

            res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async register(req, res) {
        try {
            const { namalengkap, NIP, handphone, password, unitkerja, kewenangan, akun, foto } = req.body

            let result = await user.create({
                namalengkap, NIP, handphone, password: encryptPwd(password), unitkerja, kewenangan, akun, foto
            })

            res.status(201).json(result)
            // console.log(req.body)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async login(req, res) {
        try {
            const { NIP, password } = req.body
            let findNIP = await user.findOne({
                where: { NIP }
            })
            // console.log(findNIP)
            if (findNIP) {
                if (decryptPwd(findNIP.password, password)) {
                    // res.status(200).json(findNIP)
                    let token = tokenGenerator(findNIP)
                    res.status(200).json({
                        access_token:token
                    })
                } else {
                    throw {
                        message: "Invalid password"
                    }
                }
            } else {
                res.status(400).json({
                    message: "NIP not found"
                })
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async accountInfo(req, res) {
        try {
            const id = +req.params.id

            let result = await user.findOne({
                where: { id }
            })
            // console.log(id)
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async update(req, res) {
        try {
            const { namalengkap, NIP, handphone, password, unitkerja, kewenangan, akun, foto } = req.body
            const id = +req.params.id

            let result = await user.update({
                namalengkap, NIP, handphone, password, unitkerja, kewenangan, akun, foto
            }, {
                where: { id }
            })

            // ternary
            result[0] === 1 ?
                res.status(201).json({ message: "User has been updated" }) :
                res.status(400).json({
                    message: `ID ${id} not updated`
                })
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id

            let result = await user.destroy({
                where: { id }
            })

            result === 1 ?
                res.status(200).json({ message: "User has been deleted successfully" }) :
                res.status(400).json({ message: "User has not been deleted" })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = UserController