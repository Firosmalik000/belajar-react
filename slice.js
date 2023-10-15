import toolkit from '@reduxjs/toolkit';
//  slice
// metode dalam redux toolkit yang dapat menggabungkan reducer dengan action
const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      // state cart yang mau di ubah
      state.push(action.payload);
    },
  },
});
// membuat store
const store = configureStore({
  // memasukkan reducer
  //   reducer: cartReducer
  //
  // klo mau masukkin beberapa reducer
  reducer: {
    cart: cartSlice.reducer,
  },
});

// menampilkan state yang ada dalam store ketika store selesai dibuat
console.log('onCreate store :', store.getState());
// subscribe
// mirip redux
store.subscribe(() => {
  console.log('STORE CHANGE :', store.getState());
});

// dispatch
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 200 }));
