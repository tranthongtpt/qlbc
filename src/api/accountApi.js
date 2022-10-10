import axiosClient from "./axiosClient";

const accountApi = {
    getAll: (params) => {
        const url = 'http://10.220.5.13:8090/api/v1/user/login';
        return axiosClient.get(url, {
            params
        });
    },
}

export default accountApi;