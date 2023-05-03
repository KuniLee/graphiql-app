import { Sidebar } from 'primereact/sidebar';
import { FC, ReactNode, Suspense } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

type SuspenseSideBarProps = {
  children?: ReactNode | undefined;
  visible?: boolean;
  onHide: () => void;
};

export const SuspenseSideBar: FC<SuspenseSideBarProps> = ({ children, visible, onHide }) => {
  return (
    <Sidebar visible={visible} onHide={onHide} className="w-full md:w-20rem lg:w-30rem">
      <Suspense fallback={<ProgressSpinner />}>{children}</Suspense>
    </Sidebar>
  );
};
