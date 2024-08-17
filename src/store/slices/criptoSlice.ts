import { createSlice } from "@reduxjs/toolkit";
import { CriptoCoin } from "../../types";

type CriptoState = {
  currencies: CriptoCoin[];
};

const initialState: CriptoState = {
  currencies: [],
};

const currencySlice = createSlice({
  name: "cripto",
  initialState,
  reducers: {
    setCurrencies: (state, action) => {
      state.currencies = action.payload.result;
    },
  },
});

export const { setCurrencies } = currencySlice.actions;
export default currencySlice.reducer;
