import { useMemo } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import parseJson from '@/modules/GraphiQl/helpers/parseJson';

export default function (uri: string, headers: string) {
  return useMemo(
    () =>
      new ApolloClient({
        uri,
        headers: parseJson(headers),
        cache: new InMemoryCache({ addTypename: false }),
      }),
    [uri, headers]
  );
}
