import axios from 'axios/index'

let base = '/api/user'

export const httpUserApi = {
    postLoginPassword(userName, password) {
        return axios.post(`${base}/login/password`,
            {
                maxAge: 604800000,
                password: password,
                refer: {
                    channelId: 0,
                    device: '',
                    deviceUuid: '',
                    deviceVersion: '',
                    directInvitorUserId: ''
                },
                userName: userName
            }).then(res => res.data)
    }
}
