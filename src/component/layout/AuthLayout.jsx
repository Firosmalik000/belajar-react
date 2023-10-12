import { Link } from 'react-router-dom';

const AuthLayout = (props) => {
  const { title, children, type } = props;
  return (
    <div className="flex justify-center  min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-3 text-center"> {title}</h1>
        <p className="font-medium text-slae-500 mb-8 text-center">welcome plis enter your details</p>
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
