import axios from 'axios';
const API_URL = 'http://localhost:8080/api';

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// REQUEST
axiosClient.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('token');
   
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);



axiosClient.interceptors.response.use(
  async (response) => {
  
    console.log('<<=== 🚀 axiosClient response.data  ===>>',response.data.data);
    const { token, refreshToken } = response.data.data;
    
    if (token) {
      window.localStorage.setItem('token', token);
    }
    if (refreshToken) {
      window.localStorage.setItem('refreshToken', refreshToken);
    }

    return response;
  },
  async (error) => {


    if (error?.response?.status !== 401) {
      return Promise.reject(error);
    }

    const originalConfig = error.config;

     

    if (error?.response?.status === 401 && !originalConfig.sent) {
      console.log('Error 🚀', error);
      originalConfig.sent = true;
      try {
        
        const token = window.localStorage.getItem('token');
        if (!token) {
          console.log('Token not found',window.location.pathname);
         
          if(window.location.pathname !== '/login'){
            window.location.href = '/login';
          }
          return Promise.reject(error);
        }
        
        
        const refreshToken = window.localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await axiosClient.post('/v1/auth/refresh-token', {
            refreshToken: refreshToken,
          });

          const { token } = response.data.data;
          window.localStorage.setItem('token', token);

          originalConfig.headers = {
            ...originalConfig.headers,
            authorization: `Bearer ${token}`,
          };

          return axiosClient(originalConfig);
        } else {
          return Promise.reject(error);
        }
      } catch (err) {
        return Promise.reject(err);
      }
    }
  },
);

export { axiosClient };