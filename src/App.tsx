import CriptoPriceDisplay from "./componets/CriptoPriceDisplay";
import CriptoSearchForm from "./componets/CriptoSearchForm";
import "./index.css";

function App() {
  return (
    <>
      <div className="bg-[url('/public/bg.jpg')] bg-repeat bg-cover h-lvh">
        <div className="max-w-5xl w-96 m-auto flex flex-col text-center ">
          <h1 className="text-white text-5xl pt-10 font-mono font-black ">
            Cotizador de{" "}
            <span className=" block text-teal-300">Criptomonedas</span>
          </h1>
          <div className=" rounded-md h-auto mt-20 px-10 py-4 bg-white shadow-2xl">
            <CriptoSearchForm />
            <CriptoPriceDisplay />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
