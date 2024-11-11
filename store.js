import { configureStore } from '@reduxjs/toolkit';
import bikesReducer from './bikesSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    bikes: bikesReducer,
    cart: cartReducer,
  },
});

export default store;
