import { FC } from 'react';
import Header from './components/Header';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import RequestField from '@/modules/GraphiQl/components/RequestField';
import ResponseField from '@/modules/GraphiQl/components/ResponseField';

const GraphQl: FC = () => {
  return (
    <>
      <Header></Header>

      <Splitter style={{ height: '500px' }}>
        <SplitterPanel className="flex align-items-center justify-content-center">
          <RequestField />
        </SplitterPanel>
        <SplitterPanel className="flex align-items-center justify-content-center">
          <ResponseField />
        </SplitterPanel>
      </Splitter>
    </>
  );
};

export default GraphQl;
