import { ChangeEvent, FC, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { InputText } from 'primereact/inputtext';
import introspectionQuery from '@/modules/GraphiQl/store/introspectionQuery';
import { setUrl } from '@/modules/GraphiQl';
import { useDebouncedCallback } from 'use-debounce';
import cx from 'classnames';

const URLInput: FC = () => {
  const dispatch = useAppDispatch();
  const { serverUrl, isLoading, introError } = useAppSelector((state) => state.graphiQl);

  const debounced = useDebouncedCallback(() => {
    if (!isLoading) dispatch(introspectionQuery());
  }, 3000);

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUrl(event.target.value));
    debounced();
  };

  useEffect(() => {
    dispatch(introspectionQuery());
  }, [dispatch]);

  return (
    <div className="p-inputgroup">
      <Button icon="pi pi-sync" disabled={isLoading} onClick={() => dispatch(introspectionQuery())} />
      <InputText className={cx({ 'p-invalid': introError })} value={serverUrl} onChange={inputHandler} />
    </div>
  );
};

export default URLInput;
