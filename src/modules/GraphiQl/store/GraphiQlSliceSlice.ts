import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

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
export const apolloQuery = createAsyncThunk<void, never, { rejectValue: string }>(
  'graphiQl/query',
  async (_, { getState }) => {
    const {
      graphiQl: { request },
    } = getState() as RootState;

    console.log(request);
  }
);

export const GraphiQlSlice = createSlice({
  name: 'graphiQl',
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
