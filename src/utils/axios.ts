import authKey from '@constants/auth/authKey';
import axiosClient, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
const apiServerUrl = 'https://pre-onboarding-selection-task.shop/';

const axios = axiosClient.create({
  baseURL: apiServerUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(authKey.LOCAL_STORAGE_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (config: AxiosResponse) => config,
  (error: AxiosError) => {
    const errorMessage = (error.response?.data as any).message;
    if (errorMessage === 'Unauthorized') {
      //인증정보가 유효하지 않음
    }

    return Promise.reject(error);
  }
);
export default axios;
