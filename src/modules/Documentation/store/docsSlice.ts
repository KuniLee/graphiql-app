import { createSlice } from '@reduxjs/toolkit';

interface DocsState {
  sideBarIsOpened: boolean;
}

const initialState: DocsState = {
  sideBarIsOpened: false,
};

export const docsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    openDocs(state) {
      state.sideBarIsOpened = true;
    },
    closeDocs(state) {
      state.sideBarIsOpened = false;
    },
  },
});

export const { openDocs, closeDocs } = docsSlice.actions;

export default docsSlice.reducer;
