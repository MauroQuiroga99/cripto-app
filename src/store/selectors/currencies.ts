import { RootState } from "../index";

export const getCurrencies = (state: RootState) => {
  return state.cripto.currencies;
};

export const getSelectedPair = (state: RootState) => {
  return state.cripto.seletedPair;
};
