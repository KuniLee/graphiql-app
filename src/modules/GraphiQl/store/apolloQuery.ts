import { createAsyncThunk } from '@reduxjs/toolkit';
import { gql, ApolloError } from '@apollo/client';
import type { NormalizedCacheObject, ApolloClient } from '@apollo/client';
import { RootState } from '@/store';

export default createAsyncThunk<string, ApolloClient<NormalizedCacheObject>, { rejectValue: string }>(
  'graphiQl/query',
  async (client, { getState, rejectWithValue }) => {
    const {
      graphiQl: { request, variables },
    } = getState() as RootState;
    const query = gql(request);

    try {
      const result = await client.query({ query, variables });

      return JSON.stringify(result.data, null, ' ');
    } catch (error) {
      if (error instanceof ApolloError)
        if (error.networkError && 'result' in error.networkError)
          return JSON.stringify(error.networkError.result, null, ' ');

      return rejectWithValue(
        JSON.stringify(
          {
            error: 'Failed to fetch. Please check your connection',
          },
          null,
          ' '
        )
      );
    }
  }
);
