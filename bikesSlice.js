import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bikes: [
    { id: 1, name: 'Pinarello', price: '$1800', type: 'Roadbike', image: require('./assets/bifour_-removebg-preview.png') },
    { id: 2, name: 'Pina Mountain', price: '$1700', type: 'Mountain', image: require('./assets/bione-removebg-preview.png') },
    { id: 3, name: 'Pina Bike', price: '$1800', type: 'Roadbike', image: require('./assets/bithree_removebg-preview.png') },
    { id: 4, name: 'Pinarello', price: '$1900', type: 'Roadbike', image: require('./assets/bitwo-removebg-preview.png') },
    { id: 5, name: 'Pinarello', price: '$1500', type: 'Roadbike', image: require('./assets/bithree_removebg-preview.png') },
    { id: 6, name: 'Pinarello', price: '$1500', type: 'Mountain', image: require('./assets/bione-removebg-preview.png') },
  ],
};

const bikesSlice = createSlice({
  name: 'bikes',
  initialState,
  reducers: {
    addBike: (state, action) => {
      state.bikes.push(action.payload);
    },
  },
});

export const { addBike } = bikesSlice.actions;
export default bikesSlice.reducer;
