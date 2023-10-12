import Button from '../component/element/button/button';
import { useEffect, useRef, useState } from 'react';
import CardProduct from '../component/fragment/CardProduct';
import Counter from '../component/fragment/counter';
import { getProducts } from '../services/product.service';

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

const email = localStorage.getItem('email');
const ProductsPage = () => {
  // hook, state dalam functional component ato usestate
  const [cart, setCart] = useState([]);
  // state untuk total price
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    // parsing data dari lokal storage, terus kita ambil itemnya, cart, klo gaada ppake array kosong. ini didMounth. dan ga bakal ilang datanya meskipun log out
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);
  // yang bikin masuk ke local storage, dan data pertama rp.0
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);
  // untuk mengambil cart yang idnya sama
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  // untuk logout
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/Login';
  };
  // useRef
  // klo useState ada setter (setState), klo useRef gaada setternya, harus di import
  const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);
  const handleAddToCartReff = (id) => {
    // akses ke current karna ga pake setter
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem('cart', JSON.stringify(cartRef.current));
  };

  // manipulasi DOM, menghilangkan total price hingga add to cart di tekan
  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = 'table-row';
      // table row untuk membuat colum
    } else {
      totalPriceRef.current.style.display = 'none';
    }
  }, [cart]);

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
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Log Out
        </Button>
      </div>

      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {/*products.length > 0 = kita mapping klo datanya ada */}
          {products.length > 0 &&
            products.map((product) => (
              // jika bekerja menggunakan list harus pake KEY
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
              </CardProduct>
            ))}
        </div>
        {/* hook/ useState */}
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2"> Cart</h1>

          <table className="text-left table-auto border-separate border-spacing-x-5 ">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* klo useRef di map harus panggil current, klo useState gauysh */}
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 10)}...</td>
                      <td>$ {product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</td>
                      <td>{item.qty}</td>
                      <td>$ {(item.qty * product.price).toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</td>
                    </tr>
                  );
                })}
              {/* dikomentari dlu total price untuk useRef */}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>Rp.{totalPrice.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</b>
                </td>
              </tr>
            </tbody>
          </table>
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