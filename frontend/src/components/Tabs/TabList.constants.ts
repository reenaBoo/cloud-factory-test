import { QuoteName } from '../../enums/QuoteName.ts';
import { TEXT } from '../../utils/Text.ts';

type Tab = {
  code: string;
  title: string;
};

export const TABS: Tab[] = [
  { code: QuoteName.QUOTE_A, title: TEXT.QUOTE_A },
  {
    code: QuoteName.QUOTE_B,
    title: TEXT.QUOTE_B,
  },
];
