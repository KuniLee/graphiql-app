import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { gql } from '@apollo/client';

interface GraphiQlState {
  serverUrl: string;
  request: string;
  response: string;
  isLoading: boolean;
}

const initialState: GraphiQlState = {
  serverUrl: 'https://graphqlzero.almansi.me/api',
  isLoading: false,
  request: `query{
  users{
    data{
      name
    }
  }
}`,
  response: '',
};

export const apolloQuery = createAsyncThunk<string, ApolloClient<NormalizedCacheObject>, { rejectValue: string }>(
  'graphiQl/query',
  async (client, { getState, rejectWithValue }) => {
    const {
      graphiQl: { request },
    } = getState() as RootState;
    const query = gql(request);

    try {
      const result = await client.query({ query });

      return JSON.stringify(result, null, ' ');
    } catch (error) {
      return rejectWithValue(JSON.stringify(error, null, ' '));
    }
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
  extraReducers: (builder) => {
    builder
      .addCase(apolloQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
      })
      .addCase(apolloQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(apolloQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.response = action.payload || '';
      });
  },
});

export const { setUrl, setRequest } = GraphiQlSlice.actions;

export default GraphiQlSlice.reducer;
