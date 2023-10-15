import { useEffect, useRef, useState } from 'react';
import Button from '../element/button/button';
import InputForm from '../element/input/inputForm';
import { login } from '../../services/auth.service';

const FormLogin = () => {
  // menampilkan error post dengan hook
  const [loginFailed, setLoginFailed] = useState('');
  // event handler button
  const handleLogin = (event) => {
    // memasukkan data yang di event ke storage
    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    //
    // window.location.href = '/Products';
    // memasukkan data ke post menggunakan loginnya fake store
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res);
        window.location.href = '/Products';
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
    // agar tidak refresh ketika event action
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.password.value);
    console.log('login');
    // navigsi ketela event action
  };
  // mencoba useRef agar ketika di refresh langsung focus pada input
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Username" type="text" placeholder="John doe" name="username" ref={usernameRef} />
      <InputForm label="Password" type="password" placeholder="*********" name="password" />

      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
    </form>
  );
};
export default FormLogin;
