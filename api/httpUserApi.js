import axios from 'axios/index'

let base = '/api/user'

let refer = {
    appId: 0,
    device: '',
    deviceUuid: '',
    deviceVersion: '',
    directInvitorUserId: ''
}

export const httpUserApi = {
    postLoginPassword(userName, password) {
        return axios.post(`${base}/login/password`,
            {
                maxAge: 604800000,
                password: password,
                refer: refer,
                userName: userName
            }).then(res => res.data)
    },
    postLogout() {
        return axios.post(`${base}/logout`).then(res => res.data)
    },
    getState() {
        return axios.get(`${base}/state`).then(res => res.data)
    },
    postRegister(userName, phone, password, role, comment) {
        return axios.post(`${base}/register`,
            {
                userName: userName,
                phone: phone,
                password: password,
                refer: refer,
                userRole: role,
                comment: comment,
                magic: 'magpie'
            }).then(res => res.data)
    }
}
