import axios from '@utils/axios';
import { AxiosResponse } from 'axios';
import { IReqSign, IResSignIn } from 'types/auth.types';

const signUp = (body: IReqSign) => axios.post('/auth/signup', body);

const signIn = (body: IReqSign): Promise<AxiosResponse<IResSignIn>> =>
  axios.post('/auth/signin', body);

export { signUp, signIn };
