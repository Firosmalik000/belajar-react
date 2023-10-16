import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const TableCart = (props) => {
  const { products } = props;
  //   mengambil data dari store
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  //   jumlahkan total price
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
  //   untuk menampilkan total price
  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = 'table-row';
      // table row untuk membuat colum
    } else {
      totalPriceRef.current.style.display = 'none';
    }
  }, [cart]);
  return (
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
  );
};
export default TableCart;
