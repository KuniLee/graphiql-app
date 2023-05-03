import { FC } from 'react';
import URLInput from './components/URLInput';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import RequestField from '@/modules/GraphiQl/components/RequestField';
import ResponseField from '@/modules/GraphiQl/components/ResponseField';
import classes from './GraphQl.module.scss';
import { Button } from 'primereact/button';
import { openDocs } from '@/modules/Documentation';
import { useAppDispatch } from '@/hooks/redux';
import cx from 'classnames';
import RequestBtn from '@/modules/GraphiQl/components/RequestBtn';

const GraphQl: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.wrapper}>
      <div className="flex p-2 gap-2">
        <Button icon="pi pi-folder-open" onClick={() => dispatch(openDocs())} />
        <URLInput />
        <RequestBtn />
      </div>
      <Splitter style={{ height: '500px' }}>
        <SplitterPanel className={cx(classes.panel, 'flex align-items-center justify-content-center')}>
          <RequestField />
        </SplitterPanel>
        <SplitterPanel className={cx(classes.panel, 'flex align-items-center justify-content-center')}>
          <ResponseField />
        </SplitterPanel>
      </Splitter>
    </div>
  );
};

export default GraphQl;
