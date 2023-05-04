import { useMemo } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export default function (uri: string) {
  return useMemo(
    () =>
      new ApolloClient({
        uri,
        cache: new InMemoryCache(),
      }),
    [uri]
  );
}
