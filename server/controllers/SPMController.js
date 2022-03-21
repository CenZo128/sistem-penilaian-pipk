const { spm } = require('../models')

class UserController {
    static async allSPMs(req, res) {
        try {
            const spms = await spm.findAll()

            res.status(200).json(spms)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async create(req, res) {
        try {
            const { nomorspm } = req.body

            let result = await spm.create({
                nomorspm
            })

            res.status(201).json(result)
            // console.log(req.body)
        } catch (err) {
            res.status(500).json(err)
        }
    }


    static async info(req, res) {
        try {
            const id = +req.params.id

            let result = await spm.findOne({
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
            const { nomorspm } = req.body
            const id = +req.params.id

            let result = await spm.update({
                nomorspm
            }, {
                where: { id }
            })

            // ternary
            result[0] === 1 ?
                res.status(201).json({ message: "SPM has been updated" }) :
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

            let result = await spm.destroy({
                where: { id }
            })

            result === 1 ?
                res.status(200).json({ message: "spm has been deleted successfully" }) :
                res.status(400).json({ message: "spm has not been deleted" })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = UserController