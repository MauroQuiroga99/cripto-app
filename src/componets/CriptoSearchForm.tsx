import { coins } from "../data";
import { useDispatch, useSelector } from "react-redux";
import {
  getCryptoData,
  getCurrencies,
  getSelectedPair,
} from "../store/selectors/currencies";
import axios from "axios";
import { CryptoPrice, CurrencyResponse, SeletedCurrency } from "../types";
import {
  setCryptoData,
  setCurrencies,
  setSeletedPair,
} from "../store/slices/criptoSlice";
import { ChangeEvent, useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";

const CriptoSearchForm = () => {
  const dispatch = useDispatch();
  const currencies = useSelector(getCurrencies);
  const selectedPair = useSelector(getSelectedPair);
  const cryptoData = useSelector(getCryptoData);

  useEffect(() => {
    callCurrencyApi();
  }, []);

  async function callCurrencyApi() {
    const url =
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
    const {
      data: { Data },
    } = await axios<CurrencyResponse>(url);
    console.log(Data);

    const result = Data.map((item) => {
      return {
        moneda: item.CoinInfo.FullName,
        code: item.CoinInfo.Name,
      };
    });
    dispatch(setCurrencies({ result }));
    console.log(result);
  }

  async function callDataCurrencyApi(selectedPair: SeletedCurrency) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${selectedPair.criptocurrency}&tsyms=${selectedPair.currency}`;

    const {
      data: { DISPLAY },
    } = await axios<CryptoPrice>(url);
    const resultData =
      DISPLAY[selectedPair.criptocurrency][selectedPair.currency];

    const filteredData = {
      PRICE: resultData.PRICE,
      HIGHDAY: resultData.HIGHDAY,
      LOWDAY: resultData.LOWDAY,
      CHANGEPCT24HOUR: resultData.CHANGEPCT24HOUR,
      LASTUPDATE: resultData.LASTUPDATE,
      IMAGEURL: resultData.IMAGEURL,
    };
    dispatch(setCryptoData(filteredData));
    console.log(filteredData);
    console.log(cryptoData);
  }

  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch(
      setSeletedPair({
        ...selectedPair,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(selectedPair).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError("");
    callDataCurrencyApi(selectedPair);
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      {error && <ErrorMessage> {error} </ErrorMessage>}
      <div className="flex flex-col gap-8">
        <label className=" flex start text-slate-700" htmlFor="currency">
          Moneda :
        </label>
        <select
          onChange={handleChange}
          className="bg-slate-200 p-2 rounded-md"
          name="currency"
          id="currency"
          value={selectedPair.currency}
        >
          <option value="">-- Seleccione --</option>
          {coins.map((currency) => (
            <option key={currency.name} value={currency.code}>
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
          onChange={handleChange}
          value={selectedPair.criptocurrency}
        >
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.moneda} value={currency.code}>
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
