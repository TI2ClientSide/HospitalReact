import { apiRequest } from "../configs/apiMiddleware";

// Serviços para users
export default {
    deleteUser: (userId) => apiRequest("DELETE", `/user/${userId}`),
    getUsers: () => apiRequest("GET", "/user"),
    register: (jsonData) => apiRequest("POST", "/user/register",{ jsonData }),
    login: (jsonData) => apiRequest("POST", "/user/login", { jsonData }),
    getInfetados: () => apiRequest("GET", "/user/infetados"),
    addInfetados: (infetadoId) => apiRequest("POST", `/user/infetados/${infetadoId}`),
    removeInfetados: (infetadoId) => apiRequest("DELETE", `/user/infetados/${infetadoId}`),
};