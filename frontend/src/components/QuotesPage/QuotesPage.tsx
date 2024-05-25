import { useEffect } from 'react';
import { QuotesContainer } from './QuotesPage.styles';
import marketStore from '../../store/store.ts';
import MessageDialog from '../Dialogs/MessageDialog/MessageDialog.tsx';
import ErrorDialog from '../Dialogs/ErrorDialog/ErrorDialog.tsx';
import Table from '../Table/Table.tsx';
import { QuoteName } from '../../enums/QuoteName.ts';
import Tabs from '../Tabs/Tabs.tsx';
import { observer } from 'mobx-react';

const QuotesPage = observer(() => {
  const {
    fetchMarketA,
    fetchMarketB,
    activeTab,
    coinData,
    getActualCoinData,
    isError,
    setIsError,
    clearData,
  } = marketStore;

  useEffect(() => {
    if (coinData) {
      return;
    }
    const fetchMarketData = activeTab === QuoteName.QUOTE_A ? fetchMarketA : fetchMarketB;
    fetchMarketData();
    const queryInterval = setInterval(fetchMarketData, 5000);

    return () => {
      clearInterval(queryInterval);
    };
  }, [fetchMarketA, fetchMarketB, activeTab, coinData, clearData]);

  useEffect(() => {
    return () => {
      clearData();
    };
  }, [clearData, activeTab]);

  return (
    <>
      {isError && <ErrorDialog onClose={() => setIsError(!isError)} />}
      <QuotesContainer>
        <Tabs />
        <Table />
        {coinData && <MessageDialog row={coinData} onClose={() => getActualCoinData(null)} />}
      </QuotesContainer>
    </>
  );
});

export default QuotesPage;
