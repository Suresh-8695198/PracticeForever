import axios from 'axios';

const api = axios.create({
    baseURL: typeof window !== 'undefined' 
        ? `http://${window.location.hostname}:5000/api` 
        : 'http://localhost:5000/api',
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
