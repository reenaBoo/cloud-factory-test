import { MouseEvent, ReactNode } from 'react';
import { DialogCloseBtn, DialogStyled, DialogTitle, Overlay } from './Dialog.styles.ts';
import { useTranslation } from 'react-i18next';

type DialogProps = {
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Dialog = ({ onClose, title, children }: DialogProps) => {
  const { t } = useTranslation();

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <DialogStyled>
        <DialogTitle>{title}</DialogTitle>
        {children}
        <DialogCloseBtn onClick={onClose}>{t('CLOSE')}</DialogCloseBtn>
      </DialogStyled>
    </Overlay>
  );
};

export default Dialog;
