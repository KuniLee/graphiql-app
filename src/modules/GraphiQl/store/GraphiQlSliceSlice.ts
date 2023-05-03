import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GraphiQlState {
  serverUrl: string;
  request: string;
  response: string;
}

const initialState: GraphiQlState = {
  serverUrl: 'https://graphqlzero.almansi.me/api',
  request: '',
  response: '',
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

export const GraphiQlSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUrl(state, { payload }: PayloadAction<string>) {
      state.serverUrl = payload;
    },
    setRequest(state, { payload }: PayloadAction<string>) {
      state.request = payload;
    },
  },
});

export const { setUrl, setRequest } = GraphiQlSlice.actions;

export default GraphiQlSlice.reducer;
