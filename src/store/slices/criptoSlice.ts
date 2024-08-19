import { createSlice } from "@reduxjs/toolkit";
import { CriptoCoin, CryptoPrice, SeletedCurrency } from "../../types";

type CriptoState = {
  currencies: CriptoCoin[];
  selectedPair: SeletedCurrency;
  cryptoData: CryptoPrice["DISPLAY"];
};

const initialState: CriptoState = {
  currencies: [],
  selectedPair: {
    currency: "",
    criptocurrency: "",
  },
  cryptoData: {},
};

const currencySlice = createSlice({
  name: "cripto",
  initialState,
  reducers: {
    setCurrencies: (state, action) => {
      state.currencies = action.payload.result;
    },

    setSeletedPair: (state, action) => {
      state.selectedPair = action.payload;
    },

    setCryptoData: (state, action) => {
      state.cryptoData = action.payload;
    },
  },
});

export const { setCurrencies, setSeletedPair, setCryptoData } =
  currencySlice.actions;
export default currencySlice.reducer;
