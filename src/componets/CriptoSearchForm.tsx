import { coins } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies, getSelectedPair } from "../store/selectors/currencies";
import axios from "axios";
import { CurrencyResponse } from "../types";
import { setCurrencies, setSeletedPair } from "../store/slices/criptoSlice";
import { ChangeEvent, useEffect } from "react";

const CriptoSearchForm = () => {
  const dispatch = useDispatch();
  const currencies = useSelector(getCurrencies);
  const selectedPair = useSelector(getSelectedPair);
  //const [pair, setPair] = useState<SeletedCurrency>({
  // currency: "",
  //criptocurrency: "",
  //});

  useEffect(() => {
    callCurrencyApi();
  }, []);

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

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch(
      setSeletedPair({
        ...selectedPair,
        [name]: value,
      })
    );
  };

  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <label className=" flex start text-slate-700" htmlFor="currency">
          Moneda :
        </label>
        <select
          onChange={handleChange}
          className="bg-slate-200 p-2 rounded-md"
          name="currency"
          id="currency"
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
