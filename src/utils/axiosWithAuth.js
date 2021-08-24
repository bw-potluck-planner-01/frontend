import axios from 'axios'

function axiosWithAuth(){
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            authorization: token
        }
    })
}

export default axiosWithAuth