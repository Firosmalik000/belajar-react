import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from '../../context/darkMode';

const AuthLayout = (props) => {
  const { title, children, type } = props;
  //memanggil darkMode
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }
  return (
    <div className={`flex justify-center  min-h-screen items-center ${isDarkMode && 'bg-slate-900'}`}>
      <div className="w-full max-w-xs">
        <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
        <h1 className="text-blue-600 text-3xl font-bold mb-3 text-center"> {title}</h1>
        <p className="font-medium text-slate-500 mb-8 text-center">welcome plis enter your details</p>
        {children}
        {/* <Link to=''/> adalah pengganti <a href=''/> yang ada pada html agar ketika masuk ke link, tidak perlu me refresh  */}
        {/* {type === 'login' ? 'Dont have an account? ' : 'Already have an account? '}

          {type === 'login' && (
            <Link to="/Register" className="font-bold text-blue-600">
              Register
            </Link>
          )}
          {type === 'register' && (
            <Link to="/Login" className="font-bold text-blue-600">
              Login
            </Link>
          )} */}
        <Navigation type={type} />
      </div>
    </div>
  );
};
// conditional dalam bentuk if else
const Navigation = ({ type }) => {
  if (type === 'login') {
    return (
      <p className="text-sm mt-5 text-center">
        Dont have an account?{' '}
        <Link to="/Register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{' '}
        <Link to="/Login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
};
export default AuthLayout;
