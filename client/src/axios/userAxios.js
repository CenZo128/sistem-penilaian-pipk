import axios from 'axios'
import Swal from 'sweetalert2'
const URL = 'http://localhost:3000/api/users'

const getUsers = async (cb) => {
    try {
        let users = await axios({
            method: 'GET',
            url: 'http://localhost:3000/api/users'
        })
        cb(users.data)
    } catch (err) {
        console.log(err)
    }
}

const addUser = async (user, cb) => {
    try {
        const { namalengkap, handphone, NIP, kewenangan, unitkerja, akun, foto, password } = user
        let result = await axios({
            method: "POST",
            url: `http://localhost:3000/api/users/register`,
            data: {
                namalengkap, handphone, NIP, kewenangan, unitkerja, akun, foto, password
            }
        })
        if (result.data) {
            Swal.fire({
                icon: 'error',
                title: 'User has been inputted',
                text: 'User submitted!',
            })
            cb(result.data)
        }
        console.log(result.data)
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'Failed to add user...',
            text: 'Something went wrong!',
        })
        console.log(err)
    }
}

const deleteUser = async (id,cb) => {
    try {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                let result = await axios({
                    method: "Delete",
                    url: `${URL}/delete/${id}`
                })
                console.log(result)
                getUsers(cb)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export {
    getUsers, addUser, deleteUser
}