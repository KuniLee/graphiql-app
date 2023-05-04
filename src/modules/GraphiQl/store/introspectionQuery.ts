import { createAsyncThunk } from '@reduxjs/toolkit';
import { getIntrospectionQuery } from 'graphql';
import type { IntrospectionQuery } from 'graphql';
import ky from 'ky';
import isValidUrl from '@/helpers/isUrlValid';

export default createAsyncThunk<IntrospectionQuery, string, { rejectValue: string }>(
  'graphiQl/introQuery',
  async (uli, { rejectWithValue }) => {
    try {
      if (!isValidUrl(uli)) throw Error('InvalidUrl');
      const schemaJSON = await ky
        .post(uli, { json: { query: getIntrospectionQuery() } })
        .json<{ data: IntrospectionQuery }>();

      return schemaJSON.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue(JSON.stringify(error, null, ' '));
    }
  }
);
