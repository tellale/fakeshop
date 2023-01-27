import axios from "axios"

const fakeShopApi = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1'
});

fakeShopApi.interceptors.request.use((config) => {
    config.headers.set('Authorization', 'token');
    return config;
})

export default fakeShopApi;
