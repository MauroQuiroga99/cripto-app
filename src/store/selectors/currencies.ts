import { RootState } from "../index";

export const getCurrencies = (state: RootState) => {
  return state.cripto.currencies;
};

export const getSelectedPair = (state: RootState) => {
  return state.cripto.selectedPair;
};

export const getCryptoData = (state: RootState) => {
  return state.cripto.cryptoData;
};

export const getLoading = (state: RootState) => {
  return state.cripto.loading;
};
