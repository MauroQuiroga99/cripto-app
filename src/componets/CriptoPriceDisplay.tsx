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
        <h2 className=" text-center font-bold">COTIZACIÓN</h2>
        <div className="w-full grid grid-cols-[1fr_3fr] items-center pb-4 gap-14">
          <img
            src={`https:cryptocompare.com/${cryptoData.IMAGEURL}`}
            alt="Imagen Cryptomoneda"
          />
          <div className=" flex flex-col justify-start">
            <p className=" flex justify-start  ">
              El Precio es de:
              <span className="font-bold"> {cryptoData.PRICE}</span>
            </p>
            <p className=" flex justify-start ">
              El Precio más alto del día:
              <span className="font-bold"> {cryptoData.HIGHDAY}</span>
            </p>
            <p className=" flex justify-start ">
              El Precio más bajo del día:
              <span className="font-bold"> {cryptoData.LOWDAY}</span>
            </p>
            <p className=" flex justify-start">
              Variación en las últimas 24 horas:
              <span className="font-bold"> {cryptoData.CHANGEPCT24HOUR}</span>
            </p>
            <p className=" flex justify-start ">
              Última actualización:{" "}
              <span className="font-bold"> {cryptoData.LASTUPDATE} </span>
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default CriptoPriceDisplay;
