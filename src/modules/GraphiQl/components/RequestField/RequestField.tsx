import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setRequest } from '@/modules/GraphiQl';
import Editor from '../Editor/Editor';

const RequestField: FC = () => {
  const dispatch = useAppDispatch();
  const { request } = useAppSelector((state) => state.graphiQl);

  return <Editor defaultValue={request} handleChange={(e: string) => dispatch(setRequest(e))} />;
};

export default RequestField;
