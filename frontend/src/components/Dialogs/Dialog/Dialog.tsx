import { ReactNode, MouseEvent } from 'react';
import { DialogCloseBtn, DialogTitle, DialogStyled, Overlay } from './Dialog.styles.ts';
import { TEXT } from '../../../utils/Text.ts';

type DialogProps = {
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Dialog = ({ onClose, title, children }: DialogProps) => {
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <DialogStyled onClick={(e) => e.stopPropagation()}>
        <DialogTitle>{title}</DialogTitle>
        {children}
        <DialogCloseBtn onClick={onClose}>{TEXT.CLOSE}</DialogCloseBtn>
      </DialogStyled>
    </Overlay>
  );
};

export default Dialog;
