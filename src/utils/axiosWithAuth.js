import axios from 'axios'

function axiosWithAuth(){
    const token = localStorage.getItem('TOKEN')

    return axios.create({
        headers: {
            authorization: token
        }
    })
}

export default axiosWithAuth