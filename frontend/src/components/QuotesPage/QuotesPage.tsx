import { useEffect } from 'react';
import { QuotesContainer } from './QuotesPage.styles';
import marketStore from '../../store/store.ts';
import QuoteInfoDialog from '../Dialogs/QuoteInfoDialog/QuoteInfoDialog.tsx';
import Table from '../Table/Table.tsx';
import { QuoteName } from '../../enums/QuoteName.ts';
import Tabs from '../Tabs/Tabs.tsx';
import { observer } from 'mobx-react';
import Snackbar from '../Snackbar/Snackbar.tsx';
import { useTranslation } from 'react-i18next';

const QuotesPage = observer(() => {
  const { t } = useTranslation();

  const {
    fetchMarketA,
    fetchMarketB,
    activeTab,
    coinData,
    getActualCoinData,
    isError,
    setIsError,
    clearData,
    resetActiveTab,
  } = marketStore;

  const errorMessage = `${t('ERROR')}: ${t('QUERY_ERROR_TEXT')}`;

  useEffect(() => {
    resetActiveTab();
  }, []);

  useEffect(() => {
    if (coinData) {
      return;
    }
    const fetchMarketData = activeTab === QuoteName.QUOTE_B ? fetchMarketA : fetchMarketB;
    fetchMarketData();
    const queryInterval = setInterval(fetchMarketData, 5000);

    return () => {
      clearInterval(queryInterval);
    };
  }, [fetchMarketA, fetchMarketB, activeTab, coinData]);

  useEffect(() => {
    return () => {
      clearData();
    };
  }, [clearData, activeTab]);

  return (
    <QuotesContainer>
      {isError && <Snackbar isOpen={isError} message={errorMessage} onClose={() => setIsError(false)} />}
      <Tabs />
      <Table />
      {coinData && <QuoteInfoDialog row={coinData} onClose={() => getActualCoinData(null)} />}
    </QuotesContainer>
  );
});

export default QuotesPage;
