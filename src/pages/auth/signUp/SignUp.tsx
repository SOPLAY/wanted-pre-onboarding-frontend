import SignForm from '@components/signForm/SignForm';
import withAuth from '@utils/hoc/withAuth';

const SignUp = () => <SignForm type='signUp' />;

export default withAuth(SignUp, false);
