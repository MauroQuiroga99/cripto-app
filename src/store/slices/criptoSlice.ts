import { createSlice } from "@reduxjs/toolkit";
import { CriptoCoin, CryptoPrice, SeletedCurrency } from "../../types";

type CriptoState = {
  currencies: CriptoCoin[];
  selectedPair: SeletedCurrency;
  cryptoData: CryptoPrice;
  loading: boolean;
};

const initialState: CriptoState = {
  currencies: [],
  selectedPair: {
    currency: "",
    criptocurrency: "",
  },
  cryptoData: {} as CryptoPrice,
  loading: false,
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
      state.loading = false;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCurrencies, setSeletedPair, setCryptoData, setLoading } =
  currencySlice.actions;
export default currencySlice.reducer;
