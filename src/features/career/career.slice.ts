import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './career.constants';
import { CareerReducer, CareerState } from './career.types';

const careerSlice = createSlice<CareerState, CareerReducer>({
  name: 'career',
  initialState,
  reducers: {
    loadList(state: CareerState) {
      state.meta.loading = true;
    },
    loadListSuccess(state, { payload }) {
      state.data.list = payload;
      state.meta.loading = false;
    },
    loadListError(state, { payload }) {
      state.meta.error = payload;
      state.meta.loading = false;
    },
    clearList(state) {
      state.data.list = [];
    },
  },
});

export const { actions } = careerSlice;

export default careerSlice.reducer;
