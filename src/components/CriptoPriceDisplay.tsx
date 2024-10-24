import { useMemo } from "react";
import { getCryptoData, getLoading } from "../store/selectors/currencies";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

const CriptoPriceDisplay = () => {
  const cryptoData = useSelector(getCryptoData);
  const loading = useSelector(getLoading);
  const hasResult = useMemo(() => {
    return (
      cryptoData &&
      Object.keys(cryptoData).length > 0 &&
      !Object.values(cryptoData).some((value) => value === "")
    );
  }, [cryptoData]);

  if (loading)
    return (
      <div className="mt-8">
        <Spinner />
      </div>
    );

  if (!hasResult) return null;

  return (
    <div className=" mt-16">
      <>
        <h2 className=" text-center font-bold mb-10">COTIZACIÓN</h2>
        <div className="w-full flex flex-wrap justify-between  items-center pb-4 gap-14">
          <div className=" w-50 flex flex-col text-left gap-2 justify-center mx-auto">
            <p className="  justify-start  ">
              El Precio es de:
              <span className="font-bold"> {cryptoData.PRICE}</span>
            </p>
            <p className="  justify-start ">
              El Precio más alto del día:
              <span className="font-bold"> {cryptoData.HIGHDAY}</span>
            </p>
            <p className="  justify-start ">
              El Precio más bajo del día:
              <span className="font-bold"> {cryptoData.LOWDAY}</span>
            </p>
            <p className="  justify-start">
              Variación en las últimas 24 horas:
              <span className="font-bold"> {cryptoData.CHANGEPCT24HOUR}</span>
            </p>
            <p className="  justify-start ">
              Última actualización:{" "}
              <span className="font-bold"> {cryptoData.LASTUPDATE} </span>
            </p>
          </div>
          <img
            src={`https://www.cryptocompare.com/${cryptoData.IMAGEURL}`}
            alt="Imagen Cryptomoneda"
            className="w-28 mx-auto"
          />
        </div>
      </>
    </div>
  );
};

export default CriptoPriceDisplay;
