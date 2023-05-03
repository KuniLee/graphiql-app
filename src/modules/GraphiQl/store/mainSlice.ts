import { createSlice } from '@reduxjs/toolkit';

interface MainState {
  sideBarIsOpened: boolean;
}

const initialState: MainState = {
  sideBarIsOpened: false,
};

// !!!This code is needed
//
// export const login = createAsyncThunk<UserData, { email: string; password: string }, { rejectValue: string }>(
//   'auth/login',
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const result = await signIn(email, password)
//       const user = result.user as unknown as UserData
//
//       return { email: user.email, uid: user.uid, accessToken: user.accessToken }
//     } catch (error) {
//       return rejectWithValue(error instanceof Error ? error.message : 'Error')
//     }
//   }
// )

export const mainSlice = createSlice({
  name: 'main',
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

export const { openDocs, closeDocs } = mainSlice.actions;

export default mainSlice.reducer;
