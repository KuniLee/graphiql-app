import { ChangeEvent, FC } from 'react';
import { Button } from 'primereact/button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { InputText } from 'primereact/inputtext';
import introspectionQuery from '@/modules/GraphiQl/store/introspectionQuery';
import { setUrl } from '@/modules/GraphiQl';
import { useDebouncedCallback } from 'use-debounce';

const URLInput: FC = () => {
  const dispatch = useAppDispatch();
  const { serverUrl, isLoading } = useAppSelector((state) => state.graphiQl);

  const debounced = useDebouncedCallback(() => {
    if (!isLoading) dispatch(introspectionQuery());
  }, 3000);

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUrl(event.target.value));
    debounced();
  };

  return (
    <div className="p-inputgroup">
      <Button icon="pi pi-sync" disabled={isLoading} onClick={() => dispatch(introspectionQuery())} />
      <InputText value={serverUrl} onChange={inputHandler} />
    </div>
  );
};

export default URLInput;
