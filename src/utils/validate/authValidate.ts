const email = (email: string) => email.includes('@');
const password = (password: string) => password.length >= 8;

const authValidate = {
  email,
  password,
};
export default authValidate;
