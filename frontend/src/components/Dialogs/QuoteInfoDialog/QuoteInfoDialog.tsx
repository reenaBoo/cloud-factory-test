import { QuoteInfoDialogText } from './QuoteInfoDialog.styles.ts';
import type { QuoteType } from '../../types/QuoteType.ts';
import Dialog from '../Dialog/Dialog.tsx';
import { useTranslation } from 'react-i18next';
import { useModifySymbol } from '../../../utils/useModifySymbol.ts';

type QuoteInfoDialogProps = {
  row: QuoteType | null;
  onClose: () => void;
};

const QuoteInfoDialog = ({ row, onClose }: QuoteInfoDialogProps) => {
  const { t } = useTranslation();

  if (!row) {
    return null;
  }

  return (
    <Dialog title={t('TICKER_INFO')} onClose={onClose}>
      <>
        <QuoteInfoDialogText>{`${t('TICKER')}: ${useModifySymbol(row.symbol)}`}</QuoteInfoDialogText>
        <QuoteInfoDialogText>{`${t('LAST_COURSE')}: ${row.price}`}</QuoteInfoDialogText>
        <QuoteInfoDialogText>{`${t('BEST_BID')}: ${row.bestBidPrice}`}</QuoteInfoDialogText>
        <QuoteInfoDialogText>{`${t('BEST_ASK')}: ${row.bestAskPrice}`}</QuoteInfoDialogText>
        <QuoteInfoDialogText>{`${t('BEST_ASK_SIZE')}: ${row.bestAskSize}`}</QuoteInfoDialogText>
      </>
    </Dialog>
  );
};

export default QuoteInfoDialog;
