import { currencies } from "../data";

const CriptoSearchForm = () => {
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
          {currencies.map((currency) => (
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
