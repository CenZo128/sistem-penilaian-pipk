import React, { useState } from 'react'
import { addUser } from '../../axios/userAxios'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
    const navigation = useNavigate()
    const [input, setInput] = useState({
        namalengkap: "",
        handphone: "",
        NIP: "",
        kewenangan: "",
        unitkerja: "",
        akun: "0",
        foto: "https://via.placeholder.com/150",
        password: "123"
    })

    const submitHandler = async () => {
        // console.log(input)
        try {
            let callbackResult = ""
            await addUser(input,
                (result) => callbackResult = result)

            if (callbackResult)
                navigation('/users')

        } catch (err) {
            console.log(err)
        }
    }
    const cancelHandler = () => {
        // console.log("Cancel")
        navigation('/users')
    }
    return (
        <div className="w-100 p-3">
            <div className="row">
                <div className="col-6 mx-auto">
                    <form>
                        <div className="mb-3">
                            <label>Nama Lengkap:</label>
                            <input type="text" className="form-control" placeholder="Nama Lengkap"
                                onChange={(e) => setInput({ ...input, namalengkap: e.target.value })}></input>
                        </div>
                        <div className="mb-3">
                            <label>NIP:</label>
                            <input type="text" className="form-control" placeholder="NIP"
                                onChange={(e) => setInput({ ...input, NIP: e.target.value })}></input>
                        </div>

                        <div className="mb-3">
                            <label>No HP :</label>
                            <input type="text" className="form-control" placeholder="Nama Lengkap"
                                onChange={(e) => setInput({ ...input, handphone: e.target.value })}></input>
                        </div>

                        <div className="mb-3">
                            <label>Kewenangan :</label>
                            <input type="text" className="form-control" placeholder="Nama Lengkap"
                                onChange={(e) => setInput({ ...input, kewenangan: e.target.value })}></input>
                        </div>

                        <div className="mb-3">
                            <label>Unit Kerja :</label>
                            <input type="text" className="form-control" placeholder="Unit Kerja"
                                onChange={(e) => setInput({ ...input, unitkerja: e.target.value })}></input>
                        </div>

                        <div className="mb-3">
                            <a className="btn btn-sm btn-success me-3"
                                onClick={() => submitHandler()}>Add User</a>
                            <a className="btn btn-sm btn-danger"
                                onClick={() => cancelHandler()}>Cancel</a>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default AddUser