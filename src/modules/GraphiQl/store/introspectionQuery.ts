import { createAsyncThunk } from '@reduxjs/toolkit';
import { getIntrospectionQuery } from 'graphql';
import type { IntrospectionQuery } from 'graphql';
import ky from 'ky';
import isValidUrl from '@/helpers/isUrlValid';
import { RootState } from '@/store';

export default createAsyncThunk<IntrospectionQuery, undefined, { rejectValue: string }>(
  'graphiQl/introQuery',
  async (_, { rejectWithValue, getState }) => {
    const {
      graphiQl: { serverUrl },
    } = getState() as RootState;

    try {
      if (!isValidUrl(serverUrl)) throw Error('InvalidUrl');
      const schemaJSON = await ky
        .post(serverUrl, { json: { query: getIntrospectionQuery() } })
        .json<{ data: IntrospectionQuery }>();

      return schemaJSON.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue(JSON.stringify(error, null, ' '));
    }
  }
);
