import React, { useState } from 'react'
import axios from 'axios'

const AddUser = () => {
    const [input, setInput] = useState({
        namalengkap: "",
        handphone: "",
        NIP: "",
        kewenangan: "",
        unitkerja: "",
        akun: "",
        foto: "https://via.placeholder.com/150"
    })

    const submitHandler = () => {
        console.log(input)
    }
    const cancelHandler = () => {
        console.log("Cancel")
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