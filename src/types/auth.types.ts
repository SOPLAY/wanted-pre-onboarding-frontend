//request types
export interface IReqSign {
  email: string;
  password: string;
}

//response types
export interface IResSignIn {
  access_token: string;
}
