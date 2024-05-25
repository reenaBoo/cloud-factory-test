import { ButtonGroup, Tab } from './Tabs.styles.ts';
import { TABS } from './TabList.constants';
import marketStore from '../../store/store.ts';
import { observer } from 'mobx-react';

const Tabs = observer(() => {
  const { activeTab, selectTab } = marketStore;

  const handleSetActiveTab = (tab: string) => {
    selectTab(tab);
  };

  return (
    <ButtonGroup>
      {TABS.map((tab) => (
        <Tab key={tab.code} active={activeTab === tab.code} onClick={() => handleSetActiveTab(tab.code)}>
          {tab.title}
        </Tab>
      ))}
    </ButtonGroup>
  );
});

export default Tabs;
