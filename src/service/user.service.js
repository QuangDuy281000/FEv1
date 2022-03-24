import httpClient from "../http-common"
const getAll=(config) =>{
    return httpClient.get('/users',config);
}
const Login=(data) =>{
    return httpClient.post('/login',data);
}

const RegisterUser=(data) =>{
    return httpClient.post('/register',data)
}
export default {getAll,Login,RegisterUser}