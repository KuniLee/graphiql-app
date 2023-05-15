import { Sidebar } from 'primereact/sidebar';
import { FC, ReactNode, Suspense, useEffect } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { closeDocs } from '@/modules/Documentation';

type SuspenseSideBarProps = {
  children?: ReactNode | undefined;
};

const SuspenseSideBar: FC<SuspenseSideBarProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const {
    docs: { sideBarIsOpened },
    graphiQl: { introQuery },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (introQuery === null) dispatch(closeDocs());
  }, [introQuery, dispatch]);

  return (
    <Sidebar visible={sideBarIsOpened} onHide={() => dispatch(closeDocs())} className="w-full md:w-20rem lg:w-30rem">
      <Suspense fallback={<ProgressSpinner className="absolute right-0 left-0 h-full" />}>{children}</Suspense>
    </Sidebar>
  );
};

export default SuspenseSideBar;
