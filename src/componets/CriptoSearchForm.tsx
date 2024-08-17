import { coins } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies } from "../store/selectors/currencies";
import axios from "axios";
import { CurrencyResponse } from "../types";
import { setCurrencies } from "../store/slices/criptoSlice";
import { useEffect } from "react";

const CriptoSearchForm = () => {
  const dispatch = useDispatch();
  const currencies = useSelector(getCurrencies);

  useEffect(() => {
    callCurrencyApi();
  }, []);

  console.log(currencies);

  async function callCurrencyApi() {
    const url =
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
    const {
      data: { Data },
    } = await axios<CurrencyResponse>(url);

    const result = Data.map((item) => {
      return {
        moneda: item.CoinInfo.FullName,
        code: item.CoinInfo.Name,
      };
    });
    dispatch(setCurrencies({ result }));
  }

  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <label className=" flex start text-slate-700" htmlFor="currency">
          Moneda :
        </label>
        <select
          className="bg-slate-200 p-2 rounded-md"
          name="currency"
          id="currency"
        >
          <option value="">-- Seleccione --</option>
          {coins.map((currency) => (
            <option key={currency.code} value={currency.name}>
              {" "}
              {currency.name}{" "}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-8">
        <label className=" flex start text-slate-700" htmlFor="criptourrency">
          Criptomoneda :
        </label>
        <select
          className="bg-slate-200 p-2 rounded-md"
          name="criptocurrency"
          id="criptocurrency"
        >
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.moneda}>
              {currency.moneda}
            </option>
          ))}
        </select>
      </div>

      <input
        className="bg-emerald-400 p-2 rounded-md font-bold cursor-pointer uppercase hover:bg-emerald-600"
        type="submit"
        value="cotizar"
      />
    </form>
  );
};

export default CriptoSearchForm;
