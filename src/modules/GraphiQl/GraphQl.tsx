import { FC } from 'react';
import URLInput from './components/URLInput';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import RequestField from '@/modules/GraphiQl/components/RequestField';
import ResponseField from '@/modules/GraphiQl/components/ResponseField';
import classes from './GraphQl.module.scss';
import cx from 'classnames';
import RequestBtn from '@/modules/GraphiQl/components/RequestBtn';
import DocsBtn from '@/modules/GraphiQl/components/DocsBtn';

const GraphQl: FC = () => {
  return (
    <div className={cx(classes.wrapper, 'container my-2')}>
      <div className="flex p-2 gap-2">
        <DocsBtn />
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
