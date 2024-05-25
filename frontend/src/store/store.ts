import { makeAutoObservable, action } from 'mobx';
import type { QuoteType } from '../components/types/QuoteType.ts';
import { QuoteName } from '../enums/QuoteName.ts';

class MarketStore {
  data: QuoteType[] = [];
  isLoading: boolean = false;
  activeTab: string = QuoteName.QUOTE_A;
  coinData: QuoteType | null = null;
  isError: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      setLoader: action,
      setIsError: action,
      fetchMarketA: action,
      fetchMarketB: action,
      selectTab: action,
      getActualCoinData: action,
      clearData: action,
    });
  }

  setLoader = (value: boolean) => {
    this.isLoading = value;
  };

  setIsError = (value: boolean) => {
    this.isError = value;
  };

  fetchInitData = async () => {
    this.setLoader(true);
    try {
      const response = await fetch('http://localhost:3001/api');
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Ошибка запроса:', error);
      this.setLoader(false);
      throw error;
    } finally {
      this.setLoader(false);
    }
  };

  fetchMarketA = async () => {
    try {
      const data = await this.fetchInitData();

      const initData = data?.data;
      const half = Math.ceil(initData.length / 2);
      const firstHalf = initData.slice(0, half);

      this.setData(firstHalf);
      this.setIsError(false);
    } catch (error) {
      this.setIsError(true);
      console.error('Запрос завершился ошибкой:', error);
    }
  };

  fetchMarketB = async () => {
    try {
      const data = await this.fetchInitData();

      const initData = data?.data;
      const half = Math.ceil(initData.length / 2);
      const secondHalf = initData.slice(half);

      this.setData(secondHalf);
      this.setIsError(false);
    } catch (error) {
      this.setIsError(true);
      console.error('Запрос завершился ошибкой:', error);
    }
  };

  selectTab = (quoteName: string) => {
    this.activeTab = quoteName;
  };

  getActualCoinData = (value: QuoteType | null) => {
    this.coinData = value;
  };

  clearData = () => {
    this.data = [];
  };

  setData = (data: QuoteType[]) => {
    this.data = data;
  };
}

const marketStore = new MarketStore();

export default marketStore;
