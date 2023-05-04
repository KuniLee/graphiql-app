import { FC } from 'react';
import { Button } from 'primereact/button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { InputText } from 'primereact/inputtext';
import { setUrl } from '@/modules/GraphiQl';

const URLInput: FC = () => {
  const dispatch = useAppDispatch();
  const { serverUrl } = useAppSelector((state) => state.graphiQl);

  return (
    <div className="p-inputgroup">
      <Button icon="pi pi-sync" />
      <InputText value={serverUrl} onChange={(event) => dispatch(setUrl(event.target.value))} />
    </div>
  );
};

export default URLInput;
