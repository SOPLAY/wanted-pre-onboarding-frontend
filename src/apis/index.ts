import * as authApis from './authApis';
import * as todoApis from './todoApis';

const apis = {
  auth: {
    ...authApis,
  },
  todo: {
    ...todoApis,
  },
};

export default apis;
