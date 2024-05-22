import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Asegúrate de que la URL sea correcta
});

export const getPaises = () => api.get('/paises');
export const getDepartamentos = (paisId) => api.get(`/departamentos/${paisId}`);
export const getCiudades = (departamentoId) => api.get(`/ciudades/${departamentoId}`);
export const registrarProveedor = (data) => api.post('/proveedores', data);

export default api;