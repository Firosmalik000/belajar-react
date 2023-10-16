import Button from '../component/element/button/button';
import { useContext, useEffect, useRef, useState } from 'react';
import CardProduct from '../component/fragment/CardProduct';
import Counter from '../component/fragment/counter';
import { getProducts } from '../services/product.service';
import { getUsername } from '../services/auth.service';
import { useLogin } from '../hooks/useLogin';
import TableCart from '../component/fragment/tableCart';
import { Navbar } from '../component/layout/navbar';
import { DarkMode } from '../context/darkMode';

// belajar rendering list, atau jika data ada banyak dalam bentuk card
// const products = [
//   {
//     id: 1,
//     name: 'Sepatu Baru',
//     price: 1000000,
//     image: '/image/shoes1.jpg',
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae debitis, eius libero, minus nobis, consectetur vero unde molestias corporis quidem vitae enim natus perferendis cumque accusantium sunt eligendi minima!`,
//   },
//   {
//     id: 2,
//     name: 'Sepatu Lama',
//     price: 2000000,
//     image: '/image/shoes1.jpg',
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae debitis, eius libero, minus nobis, `,
//   },
//   {
//     id: 3,
//     name: 'Sepatu Adadong',
//     price: 5000000,
//     image: '/image/shoes1.jpg',
//     description: `ioni adalah sepatu baru dari brand adadong `,
//   },
// ];

const ProductsPage = () => {
  //
  //
  // membuat darkmode
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  //
  //
  //
  // hook, state dalam functional component ato usestate
  // sdh tidak di pakai karna sdh pake addToCart dari redux store
  // const [cart, setCart] = useState([]);
  //
  //
  // state untuk total price
  // udh ga di pake karna pake redux store
  // const [totalPrice, setTotalPrice] = useState(0);
  //
  //
  //
  // memanggil useLogin.jsx
  // const username = useLogin();
  useLogin();
  //
  //
  //
  // panngil setCart
  // tidak di pake lagi karna udh pake redux store
  // useEffect(() => {
  //   // parsing data dari lokal storage, terus kita ambil itemnya, cart, klo gaada ppake array kosong. ini didMounth. dan ga bakal ilang datanya meskipun log out
  //   setCart(JSON.parse(localStorage.getItem('cart')) || []);
  // }, []);
  //
  //
  // menampilkan username berupa token jwt yang ada di auth.services.js dan di decode
  // dicomentarin karna mau pake custom hooks di panggil di file useLogin
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     setUsername(getUsername(token));
  //   } else {
  //     window.location.href = '/Login';
  //   }
  // }, []);
  //
  //
  //
  // yang bikin masuk ke local storage, dan data pertama rp.0
  // dipindah ke tableCart
  // useEffect(() => {
  //   if (products.length > 0 && cart.length > 0) {
  //     const sum = cart.reduce((acc, item) => {
  //       const product = products.find((product) => product.id === item.id);
  //       return acc + product.price * item.qty;
  //     }, 0);
  //     setTotalPrice(sum);
  //     localStorage.setItem('cart', JSON.stringify(cart));
  //   }
  // }, [cart]);
  //
  //
  // // untuk mengambil cart yang idnya sama
  // const handleAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };
  //
  //
  // untuk logout
  // dipindah ke layout/navbar.jsx
  // const handleLogout = () => {
  //   localStorage.removeItem('token');

  //   window.location.href = '/Login';
  // };
  // useRef
  // klo useState ada setter (setState), klo useRef gaada setternya, harus di import
  // const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);
  //
  //
  // klo useRef di map harus panggil current, klo useState gauysh
  // const handleAddToCartReff = (id) => {
  //   // akses ke current karna ga pake setter
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem('cart', JSON.stringify(cartRef.current));
  // };
  //
  //
  // manipulasi DOM, menghilangkan total price hingga add to cart di tekan
  // di pindah ke tableCart
  // const totalPriceRef = useRef(null);
  // useEffect(() => {
  //   if (cart.length > 0) {
  //     totalPriceRef.current.style.display = 'table-row';
  //     // table row untuk membuat colum
  //   } else {
  //     totalPriceRef.current.style.display = 'none';
  //   }
  // }, [cart]);
  //
  //
  //
  // untuk fetch API yang ada di folder 'src/service/product.service.js'
  useEffect(() => {
    getProducts((data) => {
      // console.log(data hanya menampilkan datanya di console, maka harus di panggil)
      // console.log(data);
      setProducts(data);
    });
  }, []);
  // state baru untuk fetching
  const [products, setProducts] = useState([]);
  return (
    // metode nested component
    <>
      {/* syntax dipindah ke layout/navbar.jsx */}
      {/* <Navbar /> */}
      {/* navbar ditaro di main agar saat buka semua halaman navbar tidak berubah */}
      <Navbar />

      <div className={`flex justify-center py-5 ${isDarkMode && 'bg-gray-800'}`}>
        <div className="w-4/6 flex flex-wrap">
          {/*products.length > 0 = kita mapping klo datanya ada */}
          {products.length > 0 &&
            products.map((product) => (
              // jika bekerja menggunakan list harus pake KEY
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  // karna sudah pake addToCart redux store maka udh ga di pake
                  // handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
        </div>
        {/* hook/ useState */}
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2"> Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
      <div className="flex w-100 justify-center"></div>
      {/* <div className="mt-5 mb-5 flex justify-center">
        <Counter></Counter>
      </div> */}
    </>
  );
};
export default ProductsPage;
