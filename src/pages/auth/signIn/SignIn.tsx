import SignForm from '@components/signForm/SignForm';
import withAuth from '@utils/hoc/withAuth';
const SignIn = () => <SignForm type='signIn' />;

export default withAuth(SignIn, false);
