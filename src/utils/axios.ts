import axiosClient from 'axios';
const apiServerUrl = 'https://pre-onboarding-selection-task.shop/';

const axios = axiosClient.create({
  baseURL: apiServerUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axios;
