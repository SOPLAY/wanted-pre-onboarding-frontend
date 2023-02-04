import apis from '@apis/index';
import authKey from '@constants/auth/authKey';
import { useNavigate } from 'react-router-dom';
import { IReqSign } from 'types/auth.types';

const useAuth = () => {
  const navigate = useNavigate();

  const signIn = async (data: IReqSign) =>
    await apis.auth
      .signIn(data)
      .then((res) => {
        localStorage.setItem(authKey.LOCAL_STORAGE_KEY, res.data.access_token);
        navigate('/todos');
        return res;
      })
      .catch((err) => {
        alert(err.response.data.message);
      });

  const signUp = async (data: IReqSign) =>
    await apis.auth
      .signUp(data)
      .then((res) => {
        alert('회원가입 성공');
        navigate('/auth/signin');
        return res;
      })
      .catch((err) => {
        alert(err.response.data.message);
      });

  return { signIn, signUp };
};

export default useAuth;
