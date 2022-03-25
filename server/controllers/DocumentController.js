const { document,spm } = require('../models')

class UserController {
    static async allDocuments(req, res) {
        try {
            const documents = await document.findAll({
                include: [ spm ]
            })

            res.status(200).json(documents)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async create(req, res) {
        try {
            const { jenis, spmId } = req.body
            let namafile = req.file.filename;
            let ukuran = req.file.size

            let result = await document.create({
                namafile, jenis, ukuran, spmId
            })

            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }


    static async info(req, res) {
        try {
            const id = +req.params.id

            let result = await document.findOne({
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
            const { namafile, jenis, ukuran, spmId } = req.body
            const id = +req.params.id

            let result = await document.update({
                namafile, jenis, ukuran, spmId
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

            let result = await document.destroy({
                where: { id }
            })

            result === 1 ?
                res.status(200).json({ message: "document has been deleted successfully" }) :
                res.status(400).json({ message: "document has not been deleted" })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = UserController