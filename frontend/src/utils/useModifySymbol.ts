export const useModifySymbol = (symbol: string) => {
  return symbol.replace(/PERP$/, '').replace(/(?<!\/)USDT/, '/USDT');
};