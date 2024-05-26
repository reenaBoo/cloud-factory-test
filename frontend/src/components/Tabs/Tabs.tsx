import { ButtonGroup, Tab } from './Tabs.styles.ts';
import marketStore from '../../store/store.ts';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import { QuoteName } from '../../enums/QuoteName.ts';

const tabsList: string[] = [QuoteName.QUOTE_A, QuoteName.QUOTE_B];

const Tabs = observer(() => {
  const { t } = useTranslation();
  const { activeTab, selectTab } = marketStore;

  const handleSetActiveTab = (tab: string) => {
    selectTab(tab);
  };

  return (
    <ButtonGroup>
      {tabsList.map((tab) => (
        <Tab key={tab} $isActive={activeTab === tab} onClick={() => handleSetActiveTab(tab)}>
          {t(tab)}
        </Tab>
      ))}
    </ButtonGroup>
  );
});

export default Tabs;
