import { AlertImg, ErrorDialogText } from './ErrorDialog.styles.ts';
import AlertIcon from '../../../assets/images/alert-circle.svg';
import Dialog from '../Dialog/Dialog.tsx';
import { TEXT } from '../../../utils/Text.ts';

type ErrorDialogProps = {
  onClose: () => void
}

const ErrorDialog = ({ onClose }: ErrorDialogProps) => {
  return (
    <Dialog onClose={onClose} title={TEXT.ERROR}>
      <>
        <AlertImg src={AlertIcon} />
        <ErrorDialogText>{TEXT.QUERY_ERROR_TEXT}</ErrorDialogText>
      </>
    </Dialog>
  );
};

export default ErrorDialog;
