import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';
import apolloQuery from './apolloQuery';
import type { IntrospectionQuery } from 'graphql';
import introspectionQuery from '@/modules/GraphiQl/store/introspectionQuery';

interface GraphiQlState {
  serverUrl: string;
  request: string;
  introError: boolean;
  response: string;
  isLoading: boolean;
  headers: string;
  introQuery: IntrospectionQuery | null;
  variables: string;
}

const initialState: GraphiQlState = {
  headers: `{
  "Authorization": "test"
}`,
  introError: false,
  introQuery: null,
  serverUrl: 'https://graphqlzero.almansi.me/api',
  isLoading: false,
  request: `query($varId: ID!){
  user(id: $varId){
    id
    name
  }
}`,
  response: '',
  variables: `{
  "varId":1
}`,
};

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
    setVars(state, { payload }: PayloadAction<string>) {
      state.variables = payload;
    },
    setHeaders(state, { payload }: PayloadAction<string>) {
      state.headers = payload;
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
      })
      .addCase(introspectionQuery.fulfilled, (state, action) => {
        state.introError = false;
        state.isLoading = false;
        state.response = '';
        state.introQuery = action.payload as Draft<typeof action.payload>;
      })
      .addCase(introspectionQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(introspectionQuery.rejected, (state, { payload }) => {
        state.response = payload || '';
        state.introError = true;
        state.isLoading = false;
        state.introQuery = null;
      });
  },
});

export const { setUrl, setRequest, setVars, setHeaders } = GraphiQlSlice.actions;

export default GraphiQlSlice.reducer;
