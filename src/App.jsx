import "./App.css";
import CurrencyConvertor from "./components/currency-convertor";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <div className="container">
      <CurrencyConvertor />
    </div>
  </div></>
    
  );
}

export default App;
