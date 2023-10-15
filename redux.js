import { legacy_createStore } from 'redux';

// reducer
const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 20 }],
  },
  action
) => {
  // action
  switch (action.type) {
    // case = nama fungsi
    case 'ADD_TO_CART':
      // manipulasi dalam state
      return {
        // res parameter untuk tetap memasukkan dalam state dan harus pake rest
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
// store
// wadah state
// legacy_createStore pengganti createStore ketika tidak menggunakan redux tolkit
const store = legacy_createStore(cartReducer);
// menampilkan state yang ada dalam store ketika store selesai dibuat
console.log('onCreate store :', store.getState());

// suscribe: melihat perubahan yang terjadi di dalam store
store.subscribe(() => {
  // melihat state daalam store metode getState
  console.log('STORE CHANGE :', store.getState());
});

// dispatch
const action1 = { type: 'ADD_TO_CART', payload: { id: 2, qty: 20 } };

store.dispatch(action1);
const action2 = { type: 'ADD_TO_CART', payload: { id: 30, qty: 20 } };

store.dispatch(action2);
