import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EthereumState {
  price: number | null;
}

const initialState: EthereumState = {
  price: null,
};

const ethereumSlice = createSlice({
  name: 'ethereum',
  initialState,
  reducers: {
    setEthereumPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
  },
});

export const { setEthereumPrice } = ethereumSlice.actions;

export default ethereumSlice.reducer;
