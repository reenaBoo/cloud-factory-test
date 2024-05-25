import { MessageDialogText } from './MessageDialog.styles.ts';
import type { QuoteType } from '../../types/QuoteType.ts';
import Dialog from '../Dialog/Dialog.tsx';
import { TEXT } from '../../../utils/Text.ts';

type MessageDialogProps = {
  row: QuoteType | null;
  onClose: () => void
}

const MessageDialog = ({ row, onClose }: MessageDialogProps) => {
  if (!row) {
    return null;
  }

  return (
    <Dialog title={TEXT.TICKER_INFO} onClose={onClose}>
      <>
        <MessageDialogText>{`${TEXT.TICKER}: ${row.symbol.replace('PERP', '')}`}</MessageDialogText>
        <MessageDialogText>{`${TEXT.LAST_COURSE}: ${row.price}`}</MessageDialogText>
        <MessageDialogText>{`${TEXT.BEST_BID}: ${row.bestBidPrice}`}</MessageDialogText>
        <MessageDialogText>{`${TEXT.BEST_ASK}: ${row.bestAskPrice}`}</MessageDialogText>
        <MessageDialogText>{`${TEXT.BEST_ASK_SIZE}: ${row.bestAskSize}`}</MessageDialogText>
      </>
    </Dialog>
  );
};

export default MessageDialog;
