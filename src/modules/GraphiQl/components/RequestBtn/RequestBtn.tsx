import { FC } from 'react';
import { Button } from 'primereact/button';
import useApolloClient from '@/modules/GraphiQl/hooks/useApolloClient';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import apolloQuery from '@/modules/GraphiQl/store/apolloQuery';
import cx from 'classnames';

const RequestBtn: FC = () => {
  const { serverUrl, isLoading } = useAppSelector((state) => state.graphiQl);
  const dispatch = useAppDispatch();

  const client = useApolloClient(serverUrl);

  return (
    <Button
      disabled={isLoading}
      icon={<i className={cx('pi', { 'pi-caret-right': !isLoading, 'pi-ellipsis-h pulsate-bck': isLoading })} />}
      onClick={() => {
        dispatch(apolloQuery(client));
      }}
    />
  );
};

export default RequestBtn;
