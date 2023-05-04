import { FC } from 'react';
import { Button } from 'primereact/button';
import useApolloClient from '@/modules/GraphiQl/hooks/useApolloClient';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import apolloQuery from '@/modules/GraphiQl/store/apolloQuery';

const RequestBtn: FC = () => {
  const { serverUrl } = useAppSelector((state) => state.graphiQl);
  const dispatch = useAppDispatch();

  const client = useApolloClient(serverUrl);

  return (
    <Button
      icon={<i className="pi pi-caret-right" />}
      onClick={() => {
        dispatch(apolloQuery(client));
      }}
    />
  );
};

export default RequestBtn;
