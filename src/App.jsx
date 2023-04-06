import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Phone from "./components/Phone/Phone";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <Phone></Phone>
    </div>
  );
}

export default App;
