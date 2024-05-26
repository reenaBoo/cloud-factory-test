import { Preloader, StyledTd, StyledTh, StyledThead, StyledTr, TableSection } from './Table.styles';
import type { QuoteType } from '../types/QuoteType.ts';
import marketStore from '../../store/store.ts';
import { observer } from 'mobx-react';
import PreloaderImg from '../../assets/images/loader.svg';
import { useTranslation } from 'react-i18next';
import { useModifySymbol } from '../../utils/useModifySymbol.ts';

const Table = observer(() => {
  const { t } = useTranslation();

  const { data, getActualCoinData, isLoading, isError } = marketStore;

  if (isLoading && !data.length && !isError) {
    return <Preloader src={PreloaderImg} />;
  }

  return (
    <TableSection>
      <StyledThead>
        <tr>
          <StyledTh>{t('TICKER')}</StyledTh>
          <StyledTh>{t('LAST_COURSE')}</StyledTh>
          <StyledTh>{t('BEST_BID')}</StyledTh>
          <StyledTh>{t('BEST_ASK')}</StyledTh>
          <StyledTh>{t('BEST_ASK_SIZE')}</StyledTh>
        </tr>
      </StyledThead>
      <tbody>
        {data?.map((row: QuoteType, index: number) => (
          <StyledTr key={index + row.symbol} onClick={() => getActualCoinData(row)}>
            <StyledTd>{useModifySymbol(row.symbol)}</StyledTd>
            <StyledTd>{row.price}</StyledTd>
            <StyledTd>{row.bestBidPrice}</StyledTd>
            <StyledTd>{row.bestAskPrice}</StyledTd>
            <StyledTd>{row.bestAskSize}</StyledTd>
          </StyledTr>
        ))}
      </tbody>
    </TableSection>
  );
});

export default Table;
