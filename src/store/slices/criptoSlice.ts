import { createSlice } from "@reduxjs/toolkit";
import { CriptoCoin, SeletedCurrency } from "../../types";

type CriptoState = {
  currencies: CriptoCoin[];
  seletedPair: SeletedCurrency;
};

const initialState: CriptoState = {
  currencies: [],
  seletedPair: {
    currency: "",
    criptocurrency: "",
  },
};

const currencySlice = createSlice({
  name: "cripto",
  initialState,
  reducers: {
    setCurrencies: (state, action) => {
      state.currencies = action.payload.result;
    },

    setSeletedPair: (state, action) => {
      state.seletedPair = action.payload;
    },
  },
});

export const { setCurrencies, setSeletedPair } = currencySlice.actions;
export default currencySlice.reducer;
