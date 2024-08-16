import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

async function getCurrency() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios(url);
  console.log(Data);
}

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
});

getCurrency();

export const {} = currencySlice.actions;
export default currencySlice.reducer;
