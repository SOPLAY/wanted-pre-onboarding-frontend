import authKey from '@constants/auth/authKey';

const withAuth = (Component: React.FC, isAuthPage = true) => {
  const token = localStorage.getItem(authKey.LOCAL_STORAGE_KEY);

  if (!!token !== isAuthPage) {
    const page = isAuthPage ? '/auth/signin' : '/todos';
    window.history.pushState({ page }, '', page);
  }

  return Component;
};

export default withAuth;
