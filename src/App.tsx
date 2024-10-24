import CriptoPriceDisplay from "./components/CriptoPriceDisplay";
import CriptoSearchForm from "./components/CriptoSearchForm";
import "./index.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[url('/public/bg.jpg')] bg-no-repeat bg-cover flex items-center">
        <div className="max-w-3xl min-w-72 w-full m-auto flex flex-col text-center justify-center ">
          <h1 className="text-white text-4xl pt-10 font-mono font-black  ">
            Cotizador de{" "}
            <span className=" block text-teal-300">Criptomonedas</span>
          </h1>
          <div className=" rounded-md w-4/5 h-auto mt-10 mb-16 py-8 px-10 mx-auto bg-white shadow-2xl justify-center ">
            <CriptoSearchForm />
            <CriptoPriceDisplay />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
