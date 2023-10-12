import { useEffect, useRef } from 'react';
import Button from '../element/button/button';
import InputForm from '../element/input/inputForm';

const FormLogin = () => {
  // event handler button
  const handleLogin = (event) => {
    // memasukkan data yang di event ke storage
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    // agar tidak refresh ketika event action
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log('login');
    // navigsi ketela event action
    window.location.href = '/Products';
  };
  // mencoba useRef agar ketika di refresh langsung focus pada input
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" type="email" placeholder="exaple@gmail.com" name="email" ref={emailRef} />
      <InputForm label="Password" type="password" placeholder="*********" name="password" />

      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};
export default FormLogin;
