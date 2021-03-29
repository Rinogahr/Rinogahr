import axiosApi from "axios";


const api = axiosApi.create({
    baseURL: "http://192.168.1.107:8080"
});

api.interceptors.request.use( (config) => {
    try{
        const token = localStorage.getItem('token');
        if(token) {
            config.headers.token = `${token}`;
        }

        return config;
    }catch (erro){
        alert(erro)
    }
});

export default api;