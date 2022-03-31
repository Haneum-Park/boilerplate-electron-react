import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sample: '',
};

const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    onSetSample: (state) => {
      state.sample = 'sample';
    },
  },
});

export default sampleSlice;
