import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { RootState } from '@/store';

export default createAsyncThunk<string, ApolloClient<NormalizedCacheObject>, { rejectValue: string }>(
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
