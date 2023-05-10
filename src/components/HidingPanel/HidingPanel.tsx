import { Children, FC, ReactNode, useState } from 'react';
import { Panel, PanelHeaderTemplateOptions } from 'primereact/panel';
import { Ripple } from 'primereact/ripple';
import { TabMenu } from 'primereact/tabmenu';
import cx from 'classnames';
import classes from './HidingPanel.module.scss';

type HidingPanelProps = {
  children: ReactNode;
  tabs: string[];
};

const HidingPanel: FC<HidingPanelProps> = ({ children, tabs }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const panels: ReactNode[] = [];

  Children.map(children, (el) => {
    panels.unshift(el);
  });

  const template = (options: PanelHeaderTemplateOptions) => {
    const items = tabs.map((tab) => ({ label: tab }));
    const toggleIcon = options.collapsed ? 'pi pi-chevron-up' : 'pi pi-chevron-down';
    const className = cx(classes.header, options.className);

    return (
      <div className={className}>
        <TabMenu
          className={classes.tabMenu}
          model={items}
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        />
        <button className={options.togglerClassName} onClick={options.onTogglerClick}>
          <span className={toggleIcon}></span>
          <Ripple />
        </button>
      </div>
    );
  };

  return (
    <Panel headerTemplate={template} collapsed className={classes.panel} toggleable>
      {panels[activeIndex]}
    </Panel>
  );
};

export default HidingPanel;
