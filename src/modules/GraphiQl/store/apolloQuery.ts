import { createAsyncThunk } from '@reduxjs/toolkit';
import { gql, ApolloError } from '@apollo/client';
import type { NormalizedCacheObject, ApolloClient } from '@apollo/client';
import { RootState } from '@/store';
import parseJson from '../helpers/parseJson';
import type { OperationDefinitionNode } from 'graphql/language';

export default createAsyncThunk<string, ApolloClient<NormalizedCacheObject>, { rejectValue: string }>(
  'graphiQl/query',
  async (client, { getState, rejectWithValue }) => {
    const {
      graphiQl: { request, variables: vars },
    } = getState() as RootState;

    const query = gql(request);
    const variables = parseJson(vars);
    const defNode = query.definitions[0] as OperationDefinitionNode;

    try {
      let result;

      switch (defNode.operation) {
        case 'query':
          result = await client.query({ query, variables });
          break;
        case 'mutation':
          result = await client.mutate({ mutation: query, variables });
      }

      const data = result?.data;

      return JSON.stringify({ data }, null, ' ');
    } catch (error) {
      console.dir(error);
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
