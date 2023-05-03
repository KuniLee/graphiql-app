import { FC } from 'react';
import { Button } from 'primereact/button';
import { openDocs } from '@/modules/Documentation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { InputText } from 'primereact/inputtext';
import { setUrl } from '@/modules/GraphiQl';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { serverUrl } = useAppSelector((state) => state.graphiQl);

  return (
    <div className="py-2 flex gap-2">
      <Button icon="pi pi-folder-open" onClick={() => dispatch(openDocs())} />
      <div className="p-inputgroup">
        <Button icon="pi pi-sync" />
        <InputText value={serverUrl} onChange={(event) => dispatch(setUrl(event.target.value))} />
      </div>
    </div>
  );
};

export default Header;
