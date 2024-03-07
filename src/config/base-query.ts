import axios from 'axios';
import { FieldValues } from 'react-hook-form';

interface PostRequestProps {
  endpoint: string;
  payload: {
    name: string;
    email: string;
    metadata: { data: FieldValues };
  };
  config?: any;
}

const BASEURL = '/api';
const apiConfig = axios.create({
  baseURL: BASEURL,
});

apiConfig.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export const postRequest = async ({
  endpoint,
  payload,
  config = {},
}: PostRequestProps) => {
  return await apiConfig.post(endpoint, payload, config);
};
