import toolkit from '@reduxjs/toolkit';

const { configureStore, createAction, createReducer } = toolkit;

// membuat creatAction
const addToCart = createAction('ADD_TO_CART');
const login = createAction('CREATE_LOGIN');
// membuat reducer;

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    // state cart yang mau di ubah
    state.push(action.payload);
  });
});
const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// store
const store = configureStore({
  // memasukkan reducer
  //   reducer: cartReducer
  //
  // klo mau masukkin beberapa reducer
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});
// pada saat store dibuat
console.log('onCreate store :', store.getState());
// subscribe
// mirip redux
store.subscribe(() => {
  console.log('STORE CHANGE :', store.getState());
});
// dispatch
// megubah reducer
store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(addToCart({ id: 3, qty: 100 }));
store.dispatch(login());

// metode slice
// menggabungkan reducer dengan action
