import { Preloader, StyledTd, StyledTh, StyledThead, StyledTr, TableSection } from './Table.styles';
import type { QuoteType } from '../types/QuoteType.ts';
import marketStore from '../../store/store.ts';
import { observer } from 'mobx-react';
import PreloaderImg from '../../assets/images/Preloader.svg';
import { TEXT } from '../../utils/Text.ts';

const Table = observer(() => {
  const { data, getActualCoinData, isLoading, isError } = marketStore;

  if (isLoading && !data.length && !isError) {
    return <Preloader src={PreloaderImg} />;
  }

  return (
    <TableSection>
      <StyledThead>
        <tr>
          <StyledTh>{TEXT.TICKER}</StyledTh>
          <StyledTh>{TEXT.LAST_COURSE}</StyledTh>
          <StyledTh>{TEXT.BEST_BID}</StyledTh>
          <StyledTh>{TEXT.BEST_ASK}</StyledTh>
          <StyledTh>{TEXT.BEST_ASK_SIZE}</StyledTh>
        </tr>
      </StyledThead>
      <tbody>
        {data?.map((row: QuoteType, index: number) => (
          <StyledTr key={index + row.symbol} onClick={() => getActualCoinData(row)}>
            <StyledTd>{row.symbol.replace('PERP', '')}</StyledTd>
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
