import { FC, useMemo } from 'react';
import { useAppSelector } from '@/hooks/redux';
import { buildClientSchema, printSchema } from 'graphql/utilities';

const Docs: FC = () => {
  const { introQuery } = useAppSelector((state) => state.graphiQl);

  const docs = useMemo(() => {
    if (introQuery) return printSchema(buildClientSchema(introQuery));
  }, [introQuery]);

  return <p>{docs}</p>;
};

export default Docs;
