import { FC, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setRequest } from '@/modules/GraphiQl';
import Editor from '../Editor/Editor';
import { buildClientSchema } from 'graphql/utilities';

const RequestField: FC = () => {
  const dispatch = useAppDispatch();
  const { request, introQuery } = useAppSelector((state) => state.graphiQl);

  const schema = useMemo(() => (introQuery ? buildClientSchema(introQuery) : undefined), [introQuery]);

  return <Editor schema={schema} defaultValue={request} handleChange={(e: string) => dispatch(setRequest(e))} />;
};

export default RequestField;
