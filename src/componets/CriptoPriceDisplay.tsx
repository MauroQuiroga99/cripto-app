import { useMemo } from "react";
import { getCryptoData } from "../store/selectors/currencies";
import { useSelector } from "react-redux";

const CriptoPriceDisplay = () => {
  const cryptoData = useSelector(getCryptoData);

  // Check if cryptoData is not null/undefined and if it has valid values
  const hasResult = useMemo(() => {
    return (
      cryptoData &&
      Object.keys(cryptoData).length > 0 &&
      !Object.values(cryptoData).some((value) => value === "")
    );
  }, [cryptoData]);

  if (!hasResult) return null; // Return null if there's no valid data

  return (
    <div>
      <h2>COTIZACIÓN</h2>
      <div className="gap-8">
        <div>
          <p>El Precio es de: {cryptoData.PRICE}</p>
          <p>El Precio más alto del día: {cryptoData.HIGHDAY}</p>
          <p>El Precio más bajo del día: {cryptoData.LOWDAY}</p>
          <p>Cambio en las últimas 24 horas: {cryptoData.CHANGEPCT24HOUR}%</p>
          <p>Última actualización: {cryptoData.LASTUPDATE}</p>
        </div>
      </div>
    </div>
  );
};

export default CriptoPriceDisplay;
