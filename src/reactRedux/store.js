import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './actions_slice/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
console.log('onCreateStore', store.getState());

store.subscribe(() => {
  console.log('STORE CHANGE :', store.getState());
});

export default store;
