import axios from 'axios/index'

let base = '/api/a/user'

export const httpUserAdminApi = {
    getAllUser() {
        return axios.get(`${base}`, {
            params: {
                page: 0,
                pageSize: 100
            }
        }).then(res => res.data)
    },
    deleteDestroy(userId) {
        return axios.delete(`${base}/destroy/${userId}`).then(res => res.data)
    }
}