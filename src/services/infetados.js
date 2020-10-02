import { apiRequest } from "../configs/apiMiddleware";

// Serviços realizados pela API para infetados, sendo assim muito mais prático do que estar a ter que fazer todos os serviços individualmente
export default {
    getLocal: (searchText) => apiRequest("GET", `/infetados/local`, { query: { search: searchText } }),
    getAll: (searchText) => apiRequest("GET", `/infetados`, { query: { search: searchText } }),
    getOne: (id) => apiRequest("GET", `/infetados/${id}`),
    create: (jsonData ) => apiRequest("POST", `/infetados`, { jsonData }),
    update: (id,jsonData) => apiRequest("PUT", `/infetados/${id}`, { jsonData }),
    remove: (id) => apiRequest("DELETE", `/infetados/${id}`),
    };