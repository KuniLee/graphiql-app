import { FC } from 'react';
import { Button } from 'primereact/button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { openDocs } from '@/modules/Documentation';

const DocsBtn: FC = () => {
  const dispatch = useAppDispatch();
  const { introQuery } = useAppSelector((state) => state.graphiQl);

  return <Button icon="pi pi-folder-open" disabled={!introQuery} onClick={() => dispatch(openDocs())} />;
};

export default DocsBtn;
