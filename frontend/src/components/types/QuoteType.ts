export type QuoteType = {
  // Наилучшая цена предложения
  bestAskPrice: string;
  // Количество актива, доступное по наилучшей цене предложения
  bestAskSize: number;
  // Наилучшая цена, по которой покупатель готов купить актив на рынке
  bestBidPrice: string;
  // Наилучший объем заявки на покупку
  bestBidSize: number;
  // Последний курс
  price: string;
  sequence: number;
  side: "buy" | "sell";
  size: number;
  symbol: string;
  tradeId: string;
  ts: number;
}
