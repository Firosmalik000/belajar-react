import Button from '../element/button/button';
import InputForm from '../element/input/inputForm';

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Full Name" type="text" placeholder="Insert Your Name" name="fullname" />
      <InputForm label="Email" type="email" placeholder="exaple@gmail.com" name="email" />
      <InputForm label="Password" type="pasword" placeholder="*********" name="password" />
      <InputForm label="Confirm Password" type="pasword" placeholder="*********" name="confirmpassword" />

      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};
export default FormRegister;
