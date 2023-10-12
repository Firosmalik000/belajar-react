import AuthLayout from '../component/layout/AuthLayout';
import FormLogin from '../component/fragment/FormLogin';

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
