import { RootState } from "../index";

export const getCurrencies = (state: RootState) => {
  return state.cripto.currencies;
};
