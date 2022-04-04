import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'
// import { DataGrid } from '@mui/x-data-grid'

const User = () => {
    // const rows = [
    //     { id: 1, col1: 'Hello', col2: 'World' },
    //     { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    //     { id: 3, col1: 'MUI', col2: 'is Amazing' },
    // ];

    // const columns = [
    //     { field: 'col1', headerName: 'Column 1', width: 150 },
    //     { field: 'col2', headerName: 'Column 2', width: 150 },
    // ];

    const [users, setUsers] = useState([])
    const getUsers = async () => {
        try {
            let users = await axios({
                method: 'GET',
                url: 'http://localhost:3000/api/users'
            })
            setUsers(users.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getUsers()

    }, [])

    const NowLoading = () => {
        return (
            <tr>
                <h3 className="text-center">Now Loading</h3>
            </tr>
        )
    }

    const deleteHandler = async (id) => {
        console.log("Delete Handler ", + id)
    }
    const editHandler = async (id) => {
        console.log("Edit Handler ", + id)
    }

    const ActionButtons = ({ id }) => {
        return (
            <>
                <button className="btn btn-sm btn-info"
                    onClick={() => editHandler(id)}>Edit</button>
                <button className="btn btn-sm btn-danger"
                    onClick={() => deleteHandler(id)}>Delete</button>
            </>
        )
    }

    return (
        <div className="w-100 p-3">
            <div className="row mb-3">
                <div className="col-12 text-center">
                    <h3>Users List</h3>
                    <Link to="/users/add" className="btn btn-sm btn-primary">+ Add User</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center mx-auto">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>NIP</th>
                                <th>Unit Kerja</th>
                                <th>Kewenangan</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length !== 0 ?
                                    users.map(user => {
                                        const { id, namalengkap, NIP, unitkerja, kewenangan } = user
                                        return (
                                            <tr key={id}>
                                                <td>{id}</td>
                                                <td>{namalengkap}</td>
                                                <td>{NIP}</td>
                                                <td>{unitkerja}</td>
                                                <td>{kewenangan}</td>
                                                <td>
                                                    <ActionButtons id={id}></ActionButtons>
                                                </td>
                                            </tr>
                                        )
                                    }) :
                                    <NowLoading></NowLoading>

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default User