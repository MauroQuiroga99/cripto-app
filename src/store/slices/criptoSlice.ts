import { createSlice } from "@reduxjs/toolkit";
import { CriptoCoin, SeletedCurrency } from "../../types";

type CriptoState = {
  currencies: CriptoCoin[];
  selectedPair: SeletedCurrency;
};

const initialState: CriptoState = {
  currencies: [],
  selectedPair: {
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
      state.selectedPair = action.payload;
    },
  },
});

export const { setCurrencies, setSeletedPair } = currencySlice.actions;
export default currencySlice.reducer;
