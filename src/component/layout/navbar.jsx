import Button from '../element/button/button';
import { useLogin } from '../../hooks/useLogin';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DarkMode } from '../../context/darkMode';

export const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  const handleLogout = () => {
    localStorage.removeItem('token');

    window.location.href = '/Login';
  };
  //   membuat state total cart
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  //   pd saat halaman di render mau didMount, dipindah ke layout/navbar,
  // item yang mau di tambah, dimulai dengan index 0
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  });
  // use loginnya di panggil di products.jsx
  const username = useLogin();
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {username}

        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Log Out
        </Button>
        <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">{totalCart}</div>
        <Button className="bg-black  p-2 text-white rounded px-10 mx-5" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? 'Light' : 'Dark'}
        </Button>
      </div>
    </>
  );
};
