import { FC } from 'react';
import { useAppSelector } from '@/hooks/redux';
import { InputTextarea } from 'primereact/inputtextarea';

const ResponseField: FC = () => {
  const { response } = useAppSelector((state) => state.graphiQl);

  return <InputTextarea className="w-full h-full" value={response} rows={5} cols={30} />;
};

export default ResponseField;
