import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: JSON.parse(localStorage.getItem('cart')) || [],
    // [
    //   // {
    //   //   // menambahkan data
    //   //   // sambung di pages/products, dan cardProduct/footer, karna tempatnya handle add to cart
    //   //   id: 1,
    //   //   qty: 1,
    //   // },
    // ],
  },
  reducers: {
    addToCart: (state, action) => {
      // buat check dan mencari apakah data dalam cart itu sama dengan idnya yang ada dalam payload
      const itemInCart = state.data.find((item) => item.id === action.payload.id);

      // membuat if yang membuat item dengan id sama tidak akan bertambah datanya, melainkan menambah qty di item yang idnya sama
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        // state cart yang mau di ubah
        state.data.push(action.payload);
      }
    },
  },
});
// sebagai action
export const { addToCart } = cartSlice.actions;
// sebagai reducer untuk menampilkan data
export default cartSlice.reducer;
