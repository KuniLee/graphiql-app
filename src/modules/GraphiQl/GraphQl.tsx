import { FC } from 'react';
import URLInput from './components/URLInput';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import RequestField from '@/modules/GraphiQl/components/RequestField';
import ResponseField from '@/modules/GraphiQl/components/ResponseField';
import classes from './GraphQl.module.scss';
import cx from 'classnames';
import RequestBtn from '@/modules/GraphiQl/components/RequestBtn';
import DocsBtn from '@/modules/GraphiQl/components/DocsBtn';
import HidingPanel from '@components/HidingPanel';
import VariablesField from '@/modules/GraphiQl/components/VariablesField';
import HeadersField from '@/modules/GraphiQl/components/HeadersField';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

const GraphQl: FC = () => {
  const isVertical = useMediaQuery({ query: '(min-width: 768px)' });
  const { t } = useTranslation(['graphiQl']);

  return (
    <div className={cx(classes.wrapper, 'container my-4')}>
      <div className="flex p-2 gap-2">
        <DocsBtn />
        <URLInput />
        <RequestBtn />
      </div>
      <Splitter className={classes.splitter} layout={isVertical ? 'horizontal' : 'vertical'}>
        <SplitterPanel className={classes.panel}>
          <RequestField />
          <HidingPanel tabs={[t('HidingPanel.tabs.Headers'), t('HidingPanel.tabs.Variables')]}>
            <VariablesField />
            <HeadersField />
          </HidingPanel>
        </SplitterPanel>
        <SplitterPanel className={cx(classes.panel, 'flex align-items-center justify-content-center')}>
          <ResponseField />
        </SplitterPanel>
      </Splitter>
    </div>
  );
};

export default GraphQl;
