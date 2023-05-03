import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { InputTextarea } from 'primereact/inputtextarea';
import { setRequest } from '@/modules/GraphiQl';

const RequestField: FC = () => {
  const dispatch = useAppDispatch();
  const { request } = useAppSelector((state) => state.graphiQl);

  return (
    <InputTextarea
      className="w-full h-full"
      value={request}
      onChange={(event) => dispatch(setRequest(event.target.value))}
      rows={5}
      cols={30}
    />
  );
};

export default RequestField;
