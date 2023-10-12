import AuthLayout from '../component/layout/AuthLayout';

import FormRegister from '../component/fragment/FormRegister';

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
