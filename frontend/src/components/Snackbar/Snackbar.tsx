import { CloseButton, SnackbarContainer, SnackbarText } from './Snackbar.styles.ts';

type SnackbarProps = {
  isOpen: boolean;
  message: string;
  onClose: () => void;
};

const Snackbar = ({ onClose, message, isOpen }: SnackbarProps) => {
  return (
    <SnackbarContainer isOpen={isOpen}>
      <SnackbarText>
        {message}
      </SnackbarText>
      <CloseButton onClick={onClose}/>
    </SnackbarContainer>
  );
};
export default Snackbar;
